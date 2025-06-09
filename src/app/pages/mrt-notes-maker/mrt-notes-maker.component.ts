import { Clipboard, ClipboardModule } from '@angular/cdk/clipboard';
import {
    CdkDragDrop,
    copyArrayItem,
    DragDropModule,
} from '@angular/cdk/drag-drop';
import { CdkTableModule } from '@angular/cdk/table';
import { CommonModule } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { RouterModule } from '@angular/router';
import { Boss, BossSpell } from '../../common/models/bosses.models';
import {
    CooldownAttrib,
    CooldownPlayer,
    ECooldownType,
} from '../../common/models/cds.models';
import {
    diffISOTimes,
    isISOTimeGreater,
} from '../../common/models/date.models';
import {
    getAvailableCooldownPlayers,
    getFilterCdsWithType,
    resetAttribs,
} from '../../common/utils/cds.utils';
import {
    ALL_BOSSES,
    HeartOfFear,
    MoguShanVault,
} from '../../database/bosses.database';
import { EIcons } from '../../database/icons.database';
import { RaidHelperService } from '../../services/raid-helper.service';
import { MrtNotesMakerStore } from './mrt-notes-maker.store';
import {
    bossNoteToMRTNote,
    filterCdWithType,
    getClassIcon,
} from './mrt-notes-maker.utils';
import { MatSelectModule } from '@angular/material/select';
import { filter } from 'rxjs';

@Component({
    selector: 'app-mrt-notes-makers',
    templateUrl: 'mrt-notes-maker.component.html',
    styleUrls: ['./mrt-notes-maker.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule,
        FormsModule,
        MatButtonModule,
        MatChipsModule,
        CdkTableModule,
        MatTooltipModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        ClipboardModule,
        MatIconModule,
        DragDropModule,
        MatExpansionModule,
        RouterModule,
        MatSelectModule,
    ],
    providers: [RaidHelperService, MrtNotesMakerStore],
})
export class MrtNotesMakerComponent {
    private mrtNotesMakerStore = inject(MrtNotesMakerStore);
    private clipboard = inject(Clipboard);
    private snackBar = inject(MatSnackBar);

    EIcons = EIcons;
    ECooldownType = ECooldownType;
    getClassIcon = getClassIcon;
    filterCdWithType = filterCdWithType;
    ALL_BOSSES = ALL_BOSSES;

    CdTypes: ECooldownType[] = [
        ECooldownType.targetedDamageReduc,
        ECooldownType.personalWall,
    ];

    HeartOfFear = HeartOfFear;
    MoguShanVault = MoguShanVault;
    playersS = toSignal(this.mrtNotesMakerStore.mrtPlayers$);
    allCdsS = toSignal(this.mrtNotesMakerStore.allCds$);
    selectedBoss!: Boss;

    eventIdS = signal<string | null>('1379227092830654575');

    displayedColumns: string[] = [
        'checkbox',
        'timer',
        'icon',
        'name',
        'attribs',
    ];

    fillAuto(bossNote: Boss): void {
        resetAttribs(bossNote);
        const filteredBossSpells = bossNote.spells.filter(x => x.isChecked);
        for (const spell of filteredBossSpells) {
            this.addPlayerCD(bossNote, spell);
        }

        this.saveLocalStorage();
    }

    private addPlayerCD(bossNote: Boss, bossSpell: BossSpell): void {
        const players = this.playersS();
        if (!players) {
            return;
        }

        const allAtribs = bossNote.spells.map(x => x.attribs).flat();
        const availableCds = getAvailableCooldownPlayers(
            players,
            allAtribs,
            bossSpell.timer,
        );

        const orderedCombinaisons = bossSpell.exceptedCds.sort(
            (a, b) => a.priority - b.priority,
        );

        for (const exceptedCombinaison of orderedCombinaisons) {
            let newAttribs: CooldownAttrib[] = [];

            if (exceptedCombinaison.expectedCooldowns) {
                for (const item of exceptedCombinaison.expectedCooldowns) {
                    if (item.cdId) {
                        const cds = availableCds.filter(
                            x => x.cd && x.cd.spellId === item.cdId,
                        );

                        for (let index = 0; index < item.count; index++) {
                            if (cds[index]) {
                                newAttribs = [
                                    ...newAttribs,
                                    {
                                        player: cds[index].player,
                                        cd: cds[index].cd,
                                        timer: bossSpell.timer,
                                    },
                                ];
                            }
                        }
                    } else if (item.cdType) {
                        const filteredCds = getFilterCdsWithType(
                            availableCds,
                            item.cdType,
                        );

                        if (!filteredCds.length) {
                            continue;
                        }

                        for (let index = 0; index < item.count; index++) {
                            const cd = filteredCds[index];

                            if (cd !== undefined) {
                                newAttribs = [
                                    ...newAttribs,
                                    {
                                        player: cd.player,
                                        cd: cd.cd,
                                        timer: bossSpell.timer,
                                    },
                                ];
                            }
                        }
                    }
                }
            }

            bossSpell.attribs = [...bossSpell.attribs, ...newAttribs];
            break;
        }
    }

    loadRaidPlan(): void {
        const eventId = this.eventIdS();

        if (!eventId) {
            return;
        }

        const localSave = localStorage.getItem(eventId);
        if (localSave) {
            const saved: Boss[] = JSON.parse(localSave);
            for (let index = 0; index < this.ALL_BOSSES.length; index++) {
                for (
                    let index2 = 0;
                    index2 < this.ALL_BOSSES[index].spells.length;
                    index2++
                ) {
                    this.ALL_BOSSES[index].spells[index2].attribs =
                        saved[index].spells[index2].attribs;
                }
            }
        }
        this.selectedBoss = this.ALL_BOSSES[0];

        this.mrtNotesMakerStore.getRaidPlanEffect(eventId);
    }

    drop(
        event: CdkDragDrop<CooldownAttrib[], CooldownAttrib[], any>,
        spell: BossSpell,
    ): void {
        if (!event.container.data) {
            return;
        }

        const test = event.previousContainer.data[0] as any;

        if (test.class) {
            copyArrayItem(
                event.previousContainer.data.map(x => ({
                    player: x as any,
                    timer: spell.timer,
                })),
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        } else {
            copyArrayItem(
                event.previousContainer.data.map(x => ({
                    ...x,
                    timer: spell.timer,
                })),
                event.container.data,
                event.previousIndex,
                event.currentIndex,
            );
        }

        this.saveLocalStorage();
    }

    removeAttrib(allAttribs: CooldownAttrib[], attrib: CooldownAttrib) {
        const index = allAttribs.findIndex(
            x => x.cd === attrib.cd && x.player === attrib.player,
        );

        if (index !== -1) {
            allAttribs.splice(index, 1);
        }

        this.saveLocalStorage();
    }

    exportNote(boss: Boss) {
        boss.note = bossNoteToMRTNote(boss);
        this.clipboard.copy(boss.note);
        this.snackBar.open('Note copié', 'Fermer', {
            duration: 1000,
        });
    }

    resetNote(boss: Boss) {
        resetAttribs(boss);
        boss.note = undefined;

        this.saveLocalStorage();
    }

    isCdAvailable(boss: Boss, bossSpell: BossSpell, cd: CooldownPlayer) {
        if (!cd.cd) {
            return true;
        }

        const allAttribs = boss.spells.map(x => x.attribs).flat();
        const attribOfSameCdPlayer = allAttribs.filter(
            x =>
                x.cd &&
                cd.cd &&
                x.cd.spellId === cd.cd.spellId &&
                x.player.name === cd.player.name &&
                x.timer !== bossSpell.timer,
        );

        for (const element of attribOfSameCdPlayer) {
            const timeDiff = diffISOTimes(element.timer, bossSpell.timer);
            const test = isISOTimeGreater(cd.cd.cooldown, timeDiff);

            if (test) {
                return false;
            }
        }

        return true;
    }

    isCdUsed(boss: Boss, cd: CooldownPlayer) {
        const allAttribs = boss.spells.map(x => x.attribs).flat();
        return !allAttribs.some(
            x => x.cd === cd.cd && x.player.name === cd.player.name,
        );
    }

    private saveLocalStorage() {
        const eventId = this.eventIdS();
        if (eventId) {
            localStorage.setItem(eventId, JSON.stringify(this.ALL_BOSSES));
        }
    }

    clearCache() {
        const eventId = this.eventIdS();
        if (eventId) {
            localStorage.removeItem(eventId);
            window.location.reload();
        }
    }
}

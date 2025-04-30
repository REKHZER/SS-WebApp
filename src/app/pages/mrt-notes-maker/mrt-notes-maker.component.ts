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
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Boss, BossSpell } from '../../common/models/bosses.models';
import { CooldownAttrib } from '../../common/models/cds.models';
import {
    getAvailableCooldownPlayers,
    getFilterCdsWithType,
    resetAttribs,
} from '../../common/utils/cds.utils';
import { HeartOfFear } from '../../database/bosses.database';
import { RaidHelperService } from '../../services/raid-helper.service';
import { MrtNotesMakerStore } from './mrt-notes-maker.store';
import { bossNoteToMRTNote, getClassIcon } from './mrt-notes-maker.utils';
import { EIcons } from '../../database/icons.database';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { MatIconModule } from '@angular/material/icon';
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
    ],
    providers: [RaidHelperService, MrtNotesMakerStore],
})
export class MrtNotesMakerComponent {
    raidHelperService = inject(RaidHelperService);
    mrtNotesMakerStore = inject(MrtNotesMakerStore);

    EIcons = EIcons;
    getClassIcon = getClassIcon;

    HeartOfFear = HeartOfFear;
    playersS = toSignal(this.mrtNotesMakerStore.mrtPlayers$);

    eventIdS = signal<string | null>('1363850553901187162');

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
                        const cd = availableCds.find(
                            x => x.cd.spellId === item.cdId,
                        );

                        if (cd) {
                            newAttribs = [
                                ...newAttribs,
                                {
                                    player: cd.player,
                                    cd: cd.cd,
                                    timer: bossSpell.timer,
                                },
                            ];
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

        bossNote.note = bossNoteToMRTNote(bossNote);
    }

    loadRaidPlan(): void {
        const eventId = this.eventIdS();
        if (!eventId) {
            return;
        }
        this.mrtNotesMakerStore.getRaidPlanEffect(eventId);
    }
}

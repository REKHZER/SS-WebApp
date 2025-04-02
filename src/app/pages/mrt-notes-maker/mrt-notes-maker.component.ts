import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { Boss, BossSpell } from '../../common/models/bosses.models';
import { MRTPlayer } from '../../common/models/players.models';
import {
    getAvailableCooldownPlayers,
    getFilterCdsWithType,
    resetAttribs,
} from '../../common/utils/cds.utils';
import { RaidHelperService } from '../../services/raid-helper.service';
import { bossNoteToMRTNote, raidDropToRoster } from './mrt-notes-maker.utils';
import { CooldownAttrib } from '../../common/models/cds.models';
import { CdkTableModule } from '@angular/cdk/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DragonSoul } from '../../database/bosses.database';

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
    ],
    providers: [RaidHelperService],
})
export class MrtNotesMakerComponent {
    raidHelperService = inject(RaidHelperService);
    DragonSoul = DragonSoul;
    players: MRTPlayer[] = [];

    raidPlan$ = this.raidHelperService.getRaidplan('1337008487133351967');

    displayedColumns: string[] = [
        'checkbox',
        'timer',
        'icon',
        'name',
        'attribs',
    ];

    async ngOnInit() {
        const raidDrop = await this.raidPlan$.toPromise();
        if (raidDrop !== undefined) {
            // this.players = raidDropToRoster(raidDrop);
        }
    }

    fillAuto(bossNote: Boss): void {
        resetAttribs(bossNote);
        const filteredBossSpells = bossNote.spells.filter(x => x.isChecked);
        for (const spell of filteredBossSpells) {
            this.addPlayerCD(bossNote, spell);
        }
    }

    private addPlayerCD(bossNote: Boss, bossSpell: BossSpell): void {
        const allAtribs = bossNote.spells.map(x => x.attribs).flat();
        const availableCds = getAvailableCooldownPlayers(
            this.players,
            allAtribs,
            bossSpell.timer,
        );

        const orderedCombinaisons = bossSpell.exceptedCds.sort(
            (a, b) => a.priority - b.priority,
        );

        for (const exceptedCd of orderedCombinaisons) {
            let newAttribs: CooldownAttrib[] = [];
            if (!exceptedCd.expectedCooldowns) {
                continue;
            }

            for (const item of exceptedCd.expectedCooldowns) {
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

            if (
                newAttribs.length ===
                exceptedCd.expectedCooldowns.reduce(
                    (total, item) => total + item.count,
                    0,
                )
            ) {
                bossSpell.attribs = [...bossSpell.attribs, ...newAttribs];
                break;
            }
        }
    }

    exportNote(boss: Boss): void {
        bossNoteToMRTNote(boss);
    }
}

import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GetRaidPlanResponse } from '../../common/models/raid-helper.models';
import { RaidHelperService } from '../../services/raid-helper.service';
import { catchError, EMPTY, from, Observable, switchMap, tap } from 'rxjs';
import { MRTPlayer } from '../../common/models/players.models';
import { raidDropToRoster } from './mrt-notes-maker.utils';
import { CooldownPlayer } from '../../common/models/cds.models';
import { getCooldownPlayers } from '../../common/utils/cds.utils';

export interface MrtNotesMakerStoreState {
    raidPlan: GetRaidPlanResponse | null;
    mrtPlayers: MRTPlayer[];
    allCds: CooldownPlayer[];
}

@Injectable()
export class MrtNotesMakerStore extends ComponentStore<MrtNotesMakerStoreState> {
    raidHelperService = inject(RaidHelperService);

    raidPlan$ = this.select(state => state.raidPlan);
    mrtPlayers$ = this.select(state => state.mrtPlayers);
    allCds$ = this.select(state => state.allCds);

    constructor() {
        super({ raidPlan: null, mrtPlayers: [], allCds: [] });
    }

    getRaidPlanEffect = this.effect((obs$: Observable<string>) =>
        obs$.pipe(
            switchMap(eventId =>
                this.raidHelperService.getRaidplan(eventId).pipe(
                    tap({
                        next: raidPlan => {
                            console.log(
                                '\n\n ~ MrtNotesMakerStore ~ raidPlan:',
                                raidPlan,
                            );
                            const players = raidPlan
                                ? raidDropToRoster(raidPlan?.raidDrops)
                                : [];
                            console.log(
                                '\n\n ~ MrtNotesMakerStore ~ players:',
                                players,
                            );

                            this.setState(state => ({
                                ...state,
                                raidPlan,
                                mrtPlayers: players,
                                allCds: getCooldownPlayers(players),
                            }));
                        },
                    }),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );
}

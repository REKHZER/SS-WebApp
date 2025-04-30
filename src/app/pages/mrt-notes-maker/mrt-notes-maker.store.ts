import { inject, Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { GetRaidPlanResponse } from '../../common/models/raid-helper.models';
import { RaidHelperService } from '../../services/raid-helper.service';
import { catchError, EMPTY, from, Observable, switchMap, tap } from 'rxjs';
import { MRTPlayer } from '../../common/models/players.models';
import { raidDropToRoster } from './mrt-notes-maker.utils';

export interface MrtNotesMakerStoreState {
    raidPlan: GetRaidPlanResponse | null;
    mrtPlayers: MRTPlayer[];
}

@Injectable()
export class MrtNotesMakerStore extends ComponentStore<MrtNotesMakerStoreState> {
    raidHelperService = inject(RaidHelperService);

    raidPlan$ = this.select(state => state.raidPlan);
    mrtPlayers$ = this.select(state => state.mrtPlayers);

    constructor() {
        super({ raidPlan: null, mrtPlayers: [] });
    }

    getRaidPlanEffect = this.effect((obs$: Observable<string>) =>
        obs$.pipe(
            switchMap(eventId =>
                this.raidHelperService.getRaidplan(eventId).pipe(
                    tap({
                        next: raidPlan => {
                            this.setState(state => ({
                                ...state,
                                raidPlan,
                                mrtPlayers: raidPlan
                                    ? raidDropToRoster(raidPlan?.raidDrops)
                                    : [],
                            }));
                        },
                    }),
                    catchError(() => EMPTY),
                ),
            ),
        ),
    );
}

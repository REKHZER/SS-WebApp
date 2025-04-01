import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {
    GetEventsResponse,
    RaidHelperRaidDrop,
    RaidHelperEvent,
} from '../common/models/raid-helper.models';

@Injectable({ providedIn: 'root' })
export class RaidHelperService {
    constructor(private httpClient: HttpClient) {}

    getRaidplan = (
        eventId: string,
    ): Observable<{ eventId: string; raidDrops: RaidHelperRaidDrop[] }> =>
        this.httpClient
            .get<{ hash: string; raidDrop: RaidHelperRaidDrop[] }>(
                `https://raid-helper.dev/api/raidplan/${eventId}`,
            )
            .pipe(map(data => ({ eventId, raidDrops: data.raidDrop })));

    getEvent = (eventId: string) =>
        this.httpClient.get<RaidHelperEvent>(
            `https://raid-helper.dev/api/v2/events/${eventId}`,
        );

    getEvents = () =>
        this.httpClient
            .get<GetEventsResponse>(
                `https://raid-helper.dev/api/v3/servers/1183372485488562246/events`,
                {
                    headers: {
                        Authorization:
                            'tgrUQdfcYv6UfjFnnO4mZzGN8cVvQi5YzNH0GRlq',
                        IncludeSignUps: 'true',
                        ChannelFilter: '1316074810559959090',
                        StartTimeFilter: '1743206400', // 29-03-2025
                    },
                },
            )
            .pipe(map(x => x.postedEvents));
}

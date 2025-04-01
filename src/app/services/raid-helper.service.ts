import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RaidDrop } from '../common/models/raid-helper.models';

@Injectable({ providedIn: 'root' })
export class RaidHelperService {
    constructor(private httpClient: HttpClient) {}

    getRaidplan = (eventId: string) =>
        this.httpClient
            .get<{ raidDrop: RaidDrop[] }>(
                `https://raid-helper.dev/api/raidplan/${eventId}`,
            )
            .pipe(map(data => data.raidDrop));

    getEvent = (eventId: string) =>
        this.httpClient.get<Event>(
            `https://raid-helper.dev/api/v2/events/${eventId}`,
        );
}

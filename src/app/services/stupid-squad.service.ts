import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { RaidHelperRaidDrop } from '../common/models/raid-helper.models';
import { AttendanceInfo } from '../common/models/attendance.models';
import { Params } from '@angular/router';
import { ISODate, ISOTime } from '../common/models/date.models';

@Injectable({ providedIn: 'root' })
export class StupidSquadService {
    constructor(private httpClient: HttpClient) {}

    _api = 'http://localhost:8080';

    getAttendances = (
        page: number = 0,
        channelFilter: string[] = ['1316074810559959090'],
        includeSignUps: boolean = true,
        startTimeFilter: ISODate = '2025-03-29',
    ) => {
        const params: Params = {
            page,
            channelFilter: channelFilter.join(','),
            includeSignUps,
            startTimeFilter,
        };

        return this.httpClient.get<AttendanceInfo[]>(
            `${this._api}/attendance`,
            { params },
        );
    };
}

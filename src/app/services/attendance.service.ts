import { inject, Injectable } from '@angular/core';
import {
    AttendanceData,
    AttendanceInfo,
} from '../common/models/attendance.models';
import {
    EClassName,
    RaidHelperEvent,
    RaidHelperRaidDrop,
} from '../common/models/raid-helper.models';
import { RaidHelperService } from './raid-helper.service';
import { Observable, of } from 'rxjs';
import { PLAYERS } from '../database/players.database';

@Injectable({ providedIn: 'root' })
export class AttendanceService {
    raidHelperService = inject(RaidHelperService);

    getAttendance(
        events: RaidHelperEvent[],
        raidDrops: { eventId: string; raidDrops: RaidHelperRaidDrop[] }[],
    ): Observable<AttendanceInfo[]> {
        const attendanceDTOMap = new Map<string, AttendanceData>();
        const statisticsDTOList: AttendanceInfo[] = [];

        PLAYERS.forEach(player => {
            attendanceDTOMap.set(player.discordId, {
                userId: player.discordId,
                absenceCount: 0,
                benchCount: 0,
                totalEventCount: 0,
                signUpCount: 0,
                presenceCount: 0,
                userName: player.name,
                arrivalDate: player.arrivalDate,
            });
        });

        events.forEach(event => {
            if (event.signUps.length) {
                event.signUps.forEach(signUp => {
                    const userId = signUp.userId;
                    const attendanceDTO = attendanceDTOMap.get(userId);
                    if (
                        attendanceDTO &&
                        event.startTime * 1000 >=
                            new Date(attendanceDTO.arrivalDate).getTime()
                    ) {
                        if (
                            [EClassName.Absence, EClassName.Tentative].includes(
                                signUp.className,
                            )
                        ) {
                            attendanceDTO.absenceCount += 1;
                        } else {
                            attendanceDTO.signUpCount += 1;
                        }
                    }
                });
            }

            attendanceDTOMap.forEach((attendanceDTO, userId) => {
                if (
                    event.startTime * 1000 >=
                    new Date(attendanceDTO.arrivalDate).getTime()
                ) {
                    attendanceDTO.totalEventCount += 1;
                }
            });

            const data = raidDrops.find(x => x.eventId === event.id);
            if (data) {
                const rosteredPlayerIds = data.raidDrops.map(
                    raidDrop => raidDrop.userid,
                );

                const signedUpPlayerIds = (event.signUps || [])
                    .filter(
                        event =>
                            ![
                                EClassName.Absence,
                                EClassName.Tentative,
                            ].includes(event.className),
                    )
                    .map(signUp => signUp.userId);

                const benchPlayerIds = signedUpPlayerIds.filter(
                    playerId => !rosteredPlayerIds.includes(playerId),
                );

                benchPlayerIds.forEach(playerId => {
                    const attendanceDTO = attendanceDTOMap.get(playerId);
                    if (
                        attendanceDTO &&
                        event.startTime * 1000 >=
                            new Date(attendanceDTO.arrivalDate).getTime()
                    ) {
                        attendanceDTO.benchCount += 1;
                    }
                });
            }
        });

        attendanceDTOMap.forEach(attendanceDTO => {
            const totalEventCount = attendanceDTO.totalEventCount;
            const benchPercentage = totalEventCount
                ? (attendanceDTO.benchCount / totalEventCount) * 100
                : 0;
            const absencePercentage = totalEventCount
                ? (attendanceDTO.absenceCount / totalEventCount) * 100
                : 0;
            const presencePercentage = totalEventCount
                ? (attendanceDTO.signUpCount / totalEventCount) * 100
                : 0;
            const ghostingPercentage = totalEventCount
                ? ((totalEventCount -
                      (attendanceDTO.signUpCount +
                          attendanceDTO.absenceCount)) /
                      totalEventCount) *
                  100
                : 0;

            statisticsDTOList.push({
                absencePercentage,
                benchPercentage,
                eventCount: attendanceDTO.totalEventCount,
                ghostingPercentage,
                presencePercentage,
                userId: attendanceDTO.userId,
                userName: attendanceDTO.userName,
            });
        });

        return of(statisticsDTOList);
    }
}

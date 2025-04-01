import { AttendanceInfo } from '../models/attendance.models';

export const sortAttendanceInfosByName = (
    attendanceInfos: AttendanceInfo[],
): AttendanceInfo[] =>
    attendanceInfos.sort((a, b) => (a.userName < b.userName ? -1 : 1));

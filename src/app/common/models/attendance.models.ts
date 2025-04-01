import { ISODate } from './date.models';

export interface AttendanceInfo {
    userId: string;
    userName: string;
    benchPercentage: number;
    absencePercentage: number;
    presencePercentage: number;
    ghostingPercentage: number;
    eventCount: number;
}

export interface AttendanceData {
    userId: string;
    userName: string;
    arrivalDate: ISODate;
    signUpCount: number;
    benchCount: number;
    absenceCount: number;
    presenceCount: number;
    totalEventCount: number;
}

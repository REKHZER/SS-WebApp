import { ISODate } from './date.models';
import { EPlayerClass, EPlayerSpec } from './player-classes.models';

export interface Player {
    discordId: string;
    name: string;
    arrivalDate: ISODate;
}

export interface MRTPlayer {
    name: string;
    class: EPlayerClass;
    mainSpec: EPlayerSpec;
    offSpec?: EPlayerSpec;
}

export interface Player2 {
    name: string;
    discordId: string;
    arrivalDate: ISODate;
    mainSpecs: EPlayerSpec[];
    offSpecs: EPlayerSpec[];
}

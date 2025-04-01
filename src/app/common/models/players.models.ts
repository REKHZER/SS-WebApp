import { EPlayerClass, EPlayerSpec } from './player-classes.models';

export interface Player {
    discordId: string;
    name: string;
}

export interface MRTPlayer {
    name: string;
    class: EPlayerClass;
    mainSpec: EPlayerSpec;
    offSpec?: EPlayerSpec;
}

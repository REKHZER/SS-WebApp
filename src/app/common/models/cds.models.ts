import { ISOTime } from './date.models';
import { EPlayerSpec } from './player-classes.models';
import { MRTPlayer } from './players.models';

export interface Cooldown {
    name: string;
    spellId: number;
    iconUrl: URL;
    specs: EPlayerSpec[];
    cooldown: ISOTime;
    types: ECooldownType[];
    priority: number;
}

export interface CooldownPlayer {
    player: MRTPlayer;
    cd?: Cooldown;
}

export interface CooldownAttrib extends CooldownPlayer {
    timer: ISOTime;
}

export enum ECooldownType {
    reducMagic = 'reducMagic', // AM, Dome, SLT, AMZ (meme si pack uniquement), Desac
    reducPhysic = 'reducPhysic', // Dome, SLT, Desac
    manaRegen = 'manaRegen', // Mana tide, Hymne Espoir
    targetedDamageReduc = 'targetedDamageReduc', // Sacri, Pain Supp
    increasePoolHp = 'increasePoolHp', // Cri war, Vampiric Blood, Frenzy Regen
    raidHealingBuff = 'raidHealingBuff', // Frenzy Regen, Vampiric Blood
    personalHealingBuff = 'personalHealingBuff', // Wings, TOL
    healing = 'healing', // Tranqui, Hymne Divin
    supportHealing = 'supportHealing', // AG off spec, HTT off spec
    speedBoost = 'speedBoost', // Roar
    personalWall = 'personalWall', // Wall tanks
    antiFear = 'antiFear', // Tremor
}

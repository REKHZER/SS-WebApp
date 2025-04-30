import { CooldownAttrib, ECooldownType } from './cds.models';
import { ISOTime } from './date.models';

export interface Boss {
    name: string;
    spells: BossSpell[];
    note?: string;
}

export interface BossSpell {
    isChecked: boolean;
    name: string;
    spellId: number;
    occurance: number;
    timer: ISOTime;
    exceptedCds: ExpectedCooldownCombinaison[];
    attribs: CooldownAttrib[];
    noteTemplate: string;
    iconUrl?: URL;
}

export interface ExpectedCooldown {
    cdType: ECooldownType;
    count: number;
}

export interface ExpectedCooldownCombinaison {
    cdId?: number;
    expectedCooldowns?: ExpectedCooldown[];
    priority: number;
}

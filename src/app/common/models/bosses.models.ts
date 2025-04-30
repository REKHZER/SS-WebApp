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
    timer: ISOTime;
    exceptedCds: ExpectedCooldownCombinaison[];
    attribs: CooldownAttrib[];
    noteTemplate: string;
    iconUrl?: URL;
}

export interface ExpectedCooldown {
    cdId?: number;
    cdType?: ECooldownType;
    count: number;
}

export interface ExpectedCooldownCombinaison {
    expectedCooldowns?: ExpectedCooldown[];
    priority: number;
}

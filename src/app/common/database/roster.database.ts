import { EPlayerClass, EPlayerSpec } from '../models/player-classes.models';
import { MRTPlayer } from '../models/players.models';

export const ROSTER: MRTPlayer[] = [
    {
        name: 'Rekh',
        class: EPlayerClass.Rogue,
        mainSpec: EPlayerSpec.RogueAssassination,
    },
    {
        name: 'Htag',
        class: EPlayerClass.Paladin,
        mainSpec: EPlayerSpec.PaladinProtection,
        offSpec: EPlayerSpec.PaladinHoly,
    },
    {
        name: 'Zouga',
        class: EPlayerClass.Mage,
        mainSpec: EPlayerSpec.MageFire,
        offSpec: EPlayerSpec.MageArcane,
    },
];

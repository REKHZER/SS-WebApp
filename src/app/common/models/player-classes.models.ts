export interface PlayerClass {
    name: string;
    class: EPlayerClass;
    specs: PlayerSpec[];
    classId: number;
    color: string;
}

export enum EPlayerClass {
    Paladin = 'paladin',
    Rogue = 'rogue',
    Mage = 'mage',
    War = 'war',
    Warlock = 'warlock',
    Shaman = 'shaman',
    Priest = 'priest',
    Hunter = 'hunter',
    Druid = 'druid',
    DeathKnight = 'deathKnight',
    Monk = 'monk',
}

export interface PlayerSpec {
    spec: EPlayerSpec;
    specId: number;
}

export enum EPlayerSpec {
    ShamanElemental = 'shamanElemental',
    ShamanEnhancement = 'shamanEnhancement',
    ShamanRestoration = 'shamanRestoration',
    WarlockAffliction = 'warlockAffliction',
    WarlockDemonology = 'warlockDemonology',
    WarlockDestruction = 'warlockDestruction',
    RogueAssassination = 'rogueAssassination',
    RogueCombat = 'rogueCombat',
    RogueSubtlety = 'rogueSubtlety',
    PriestDiscipline = 'priestDiscipline',
    PriestHoly = 'priestHoly',
    PriestShadow = 'priestShadow',
    WarArms = 'warArms',
    WarFury = 'warFury',
    WarProtection = 'warProtection',
    PaladinHoly = 'paladinHoly',
    PaladinProtection = 'paladinProtection',
    PaladinRetribution = 'PaladinRetribution',
    MageArcane = 'mageArcane',
    MageFire = 'mageFire',
    MageFrost = 'mageFrost',
    HunterBeastMastery = 'hunterBeastMastery',
    HunterMarksmanship = 'hunterMarksmanship',
    HunterSurvival = 'hunterSurvival',
    DruidBalance = 'druidBalance',
    DruidFeral = 'druidFeral',
    DruidGuardian = 'druidGuardian',
    DruidRestoration = 'druidRestoration',
    DeathKnightBlood = 'deathKnightBlood',
    DeathKnightFrost = 'deathKnightFrost',
    DeathKnightUnholy = 'deathKnightUnholy',
    MonkBrewmaster = 'monkBrewmaster',
    MonkMistweaver = 'monkMistweaver',
    MonkWindwalker = 'monkWindwalker',
}

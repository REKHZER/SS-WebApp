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
    ShamanElemental = 'ShamanElemental',
    ShamanEnhancement = 'ShamanEnhancement',
    ShamanRestoration = 'ShamanRestoration1',
    WarlockAffliction = 'WarlockAffliction',
    WarlockDemonology = 'WarlockDemonology',
    WarlockDestruction = 'WarlockDestruction',
    RogueAssassination = 'RogueAssassination',
    RogueCombat = 'RogueCombat',
    RogueSubtlety = 'RogueSubtlety',
    PriestDiscipline = 'PriestDiscipline',
    PriestHoly = 'PriestHoly',
    PriestShadow = 'PriestShadow',
    WarArms = 'WarriorArms',
    WarFury = 'WarriorFury',
    WarProtection = 'WarriorProtection',
    PaladinHoly = 'PaladinHoly',
    PaladinProtection = 'PaladinProtection',
    PaladinRetribution = 'PaladinRetribution',
    MageArcane = 'MageArcane',
    MageFire = 'MageFire',
    MageFrost = 'MageFrost',
    HunterBeastMastery = 'HunterBeastMastery',
    HunterMarksmanship = 'HunterMarksmanship',
    HunterSurvival = 'HunterSurvival',
    DruidBalance = 'DruidBalance',
    DruidFeral = 'DruidFeral',
    DruidGuardian = 'DruidGuardian',
    DruidRestoration = 'DruidRestoration',
    DeathKnightBlood = 'TankBlood_Tank',
    DeathKnightFrost = 'DKFrost',
    DeathKnightUnholy = 'DKUnholy_DPS',
    MonkBrewmaster = 'TankBrewmaster',
    MonkMistweaver = 'TankMistweaver',
    MonkWindwalker = 'TankWindwalker',
}

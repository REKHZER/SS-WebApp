import {
    EPlayerClass,
    EPlayerSpec,
    PlayerClass,
} from '../models/player-classes.models';

export const ALL_CLASSES_WITH_SPECS: PlayerClass[] = [
    {
        name: 'Paladin',
        class: EPlayerClass.Paladin,
        specs: [
            { spec: EPlayerSpec.PaladinProtection, specId: 637564297647489034 },
            { spec: EPlayerSpec.PaladinHoly, specId: 637564297622454272 },
            {
                spec: EPlayerSpec.PaladinRetribution,
                specId: 637564297953673216,
            },
        ],
        classId: 579532029906124840,
        color: '#F48CBA',
    },
    {
        name: 'War',
        class: EPlayerClass.War,
        specs: [
            { spec: EPlayerSpec.WarArms, specId: 637564445031399474 },
            { spec: EPlayerSpec.WarFury, specId: 637564445215948810 },
            { spec: EPlayerSpec.WarProtection, specId: 637564444834136065 },
        ],
        classId: 579532030153588739,
        color: '#C69B6D',
    },
    {
        name: 'Warlock',
        class: EPlayerClass.Warlock,
        specs: [
            { spec: EPlayerSpec.WarlockAffliction, specId: 637564406984867861 },
            { spec: EPlayerSpec.WarlockDemonology, specId: 637564407001513984 },
            {
                spec: EPlayerSpec.WarlockDestruction,
                specId: 637564406682877964,
            },
        ],
        classId: 579532029851336716,
        color: '#8788EE',
    },
    {
        name: 'Shaman',
        class: EPlayerClass.Shaman,
        specs: [
            { spec: EPlayerSpec.ShamanElemental, specId: 637564379595931649 },
            { spec: EPlayerSpec.ShamanEnhancement, specId: 637564379772223489 },
            { spec: EPlayerSpec.ShamanRestoration, specId: 637564379847458846 },
        ],
        classId: 579532030056857600,
        color: '#0070DD',
    },
    {
        name: 'Rogue',
        class: EPlayerClass.Rogue,
        specs: [
            {
                spec: EPlayerSpec.RogueAssassination,
                specId: 637564351707873324,
            },
            { spec: EPlayerSpec.RogueCombat, specId: 637564352333086720 },
            { spec: EPlayerSpec.RogueSubtlety, specId: 637564352169508892 },
        ],
        classId: 579532030086217748,
        color: '#FFF468',
    },
    {
        name: 'Priest',
        class: EPlayerClass.Priest,
        specs: [
            { spec: EPlayerSpec.PriestDiscipline, specId: 637564323442720768 },
            { spec: EPlayerSpec.PriestHoly, specId: 637564323530539019 },
            { spec: EPlayerSpec.PriestShadow, specId: 637564323291725825 },
        ],
        classId: 579532029901799437,
        color: '#FFFFFF',
    },
    {
        name: 'Monk',
        class: EPlayerClass.Monk,
        specs: [
            { spec: EPlayerSpec.MonkBrewmaster, specId: 0 },
            { spec: EPlayerSpec.MonkMistweaver, specId: 0 },
            { spec: EPlayerSpec.MonkWindwalker, specId: 0 },
        ],
        classId: 0,
        color: '',
    },
    {
        name: 'Mage',
        class: EPlayerClass.Mage,
        specs: [
            { spec: EPlayerSpec.MageArcane, specId: 637564231545389056 },
            { spec: EPlayerSpec.MageFire, specId: 637564231239073802 },
            { spec: EPlayerSpec.MageFrost, specId: 637564231469891594 },
        ],
        classId: 579532030161977355,
        color: '#3FC7EB',
    },
    {
        name: 'Hunter',
        class: EPlayerClass.Hunter,
        specs: [
            {
                spec: EPlayerSpec.HunterBeastMastery,
                specId: 637564202021814277,
            },
            {
                spec: EPlayerSpec.HunterMarksmanship,
                specId: 637564202084466708,
            },
            { spec: EPlayerSpec.HunterSurvival, specId: 637564202130866186 },
        ],
        classId: 579532029880827924,
        color: '#AAD372',
    },
    {
        name: 'Druid',
        class: EPlayerClass.Druid,
        specs: [
            { spec: EPlayerSpec.DruidBalance, specId: 637564171994529798 },
            { spec: EPlayerSpec.DruidFeral, specId: 637564172061900820 },
            { spec: EPlayerSpec.DruidGuardian, specId: 637564171696734209 },
            { spec: EPlayerSpec.DruidRestoration, specId: 637564172007112723 },
        ],
        classId: 579532029675438081,
        color: '#FF7C0A',
    },
    {
        name: 'Death Knight',
        class: EPlayerClass.DeathKnight,
        specs: [
            { spec: EPlayerSpec.DeathKnightBlood, specId: 1013371175210065960 },
            { spec: EPlayerSpec.DeathKnightFrost, specId: 1013371107610468445 },
            {
                spec: EPlayerSpec.DeathKnightUnholy,
                specId: 1013371108575162419,
            },
        ],
        classId: 580801859221192714,
        color: '#C41E3A',
    },
];

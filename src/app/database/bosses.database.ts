import { Boss } from '../common/models/bosses.models';
import { ECooldownType } from '../common/models/cds.models';

export const Zorlok: Boss = {
    id: 'zorlok',
    name: "Zor'Lok",
    img: 'zorlok.png',
    spells: [
        {
            isChecked: true,
            name: 'F&V 1',
            timer: '00:00:01',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:1}{spell:122713} F&V 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'F&V 2',
            timer: '00:00:02',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:2}{spell:122713} F&V 2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Phase 2',
            timer: '00:05:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:01,SCC:123833:1}|cffFFA500 Phase 2 |r \n`,
        },
        {
            isChecked: true,
            name: 'F&V 1',
            timer: '00:05:42',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 16190, count: 1 }, // SLT
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
                {
                    priority: 2,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:3}{spell:122713} F&V 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'F&V 2',
            timer: '00:06:31',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 16190, count: 1 }, // SLT
                        { cdId: 62618, count: 1 }, // Dome
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 2 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:4}{spell:122713} F&V 2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'F&V 3',
            timer: '00:07:18',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 2 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:5}{spell:122713} F&V 3 - [ATTRIBS] \n`,
        },
    ],
};

export const Tayak: Boss = {
    id: 'tayak',
    name: "Tay'ak",
    img: 'tayak.png',
    spells: [
        {
            isChecked: true,
            name: 'Phase 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffFFA500 Phase 1 |r -  \n`,
        },
        {
            isChecked: true,
            name: 'US 1',
            timer: '00:00:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:0:30}{spell:122994} US1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'BS 1',
            timer: '00:01:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.speedBoost, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:01:00}{spell:358501} BS1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'US 2',
            timer: '00:01:32',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:1:32}{spell:122994} US2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'BS 2',
            timer: '00:02:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.speedBoost, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:02:00}{spell:358501} BS2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'US 3',
            timer: '00:02:33',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:2:33}{spell:122994} US3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'BS 3',
            timer: '00:03:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.speedBoost, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:03:00}{spell:358501} BS3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'US 4',
            timer: '00:03:34',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:3:34}{spell:122994} US4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'BS 4',
            timer: '00:04:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.speedBoost, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:04:00}{spell:358501} BS4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'US 5',
            timer: '00:04:35',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:4:35}{spell:122994} US5 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Phase 2',
            timer: '00:05:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:05,e,HPS_tayak_20}|cffFFA500 Phase 2 |r - \n`,
        },
        {
            isChecked: true,
            name: '20 %',
            timer: '00:05:17',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.speedBoost, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:17,e,HPS_tayak_20}{spell:123815} 20% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '20 %',
            timer: '00:05:21',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 108280, count: 2 }, // HTT
                    ],
                },
            ],
            noteTemplate: `{time:00:21,e,HPS_tayak_20}{spell:123815} 20% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '20 %',
            timer: '00:05:31',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdId: 108280, count: 1 }, // HTT
                    ],
                },
            ],
            noteTemplate: `{time:00:31,e,HPS_tayak_20}{spell:123815} 20% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '11 %',
            timer: '00:06:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 108280, count: 1 }, // HTT
                    ],
                },
            ],
            noteTemplate: `{time:00:05,e,HPS_tayak_11}{spell:123815} 11% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '11 %',
            timer: '00:06:10',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 108280, count: 1 }, // HTT
                    ],
                },
            ],
            noteTemplate: `{time:00:10,e,HPS_tayak_11}{spell:123815} 11% - [ATTRIBS] \n`,
        },
    ],
};

export const Garalon: Boss = {
    id: 'garalon',
    name: 'Garalon',
    img: 'garalon.png',
    spells: [
        {
            isChecked: true,
            name: 'Crush 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCC:122774:1}{spell:122774} Crush1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 2',
            timer: '00:00:36',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:00:36,SCC:122774:1}{spell:122774} Crush2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 3',
            timer: '00:01:12',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:01:12,SCC:122774:1}{spell:122774} Crush3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 4',
            timer: '00:01:48',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:01:48,SCC:122774:1}{spell:122774} Crush4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 5',
            timer: '00:02:24',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:02:24,SCC:122774:1}{spell:122774} Crush5 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 6',
            timer: '00:03:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:03:00,SCC:122774:1}{spell:122774} Crush6 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 7',
            timer: '00:03:36',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:03:36,SCC:122774:1}{spell:122774} Crush7 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 8',
            timer: '00:04:12',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:04:12,SCC:122774:1}{spell:122774} Crush8 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 9',
            timer: '00:04:48',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:04:48,SCC:122774:1}{spell:122774} Crush9 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Crush 10',
            timer: '00:05:24',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:05:24,SCC:122774:1}{spell:122774} Crush10 - [ATTRIBS] \n`,
        },
    ],
};

export const Meljarak: Boss = {
    id: 'meljarak',
    name: 'Meljarak',
    img: 'meljarak.png',
    spells: [
        {
            isChecked: true,
            name: '1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:26,SCC:115203:1} {spell:33206} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:14,SCC:33206:1} {spell:33206} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:14,SCC:33206:2} {spell:114030} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '4',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:18,SCC:114030:1} {spell:114030} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '5',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:18,SCC:114030:2} {spell:114030} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '6',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:18,SCC:114030:3} {spell:114030} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '7',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:18,SCC:114030:4} {spell:62618} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '8',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:16,SCC:62618:1} {spell:62618} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: '9',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:16,SCC:62618:1} {spell:62618} - [ATTRIBS] \n`, // Joueur
        },
    ],
};

export const Unsok: Boss = {
    id: 'unsok',
    name: "Un'Sok",
    img: 'unsok.png',
    spells: [
        {
            isChecked: true,
            name: 'MS 1',
            timer: '00:00:30',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:1}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 2',
            timer: '00:01:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:2}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 3',
            timer: '00:01:30',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:3}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 4',
            timer: '00:02:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:4}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 5',
            timer: '00:02:30',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:5}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 6',
            timer: '00:03:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:6}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 7',
            timer: '00:03:30',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:7}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 8',
            timer: '00:04:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122408:8}{spell:122408} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Rota P3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `Rota P3 \n`,
        },
        {
            isChecked: true,
            name: 'CD 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SAA:122556:1}{spell:122556} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'CD 2',
            timer: '00:00:10',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:10,SAA:122556:1}{spell:122556} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'CD 3',
            timer: '00:00:20',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:20,SAA:122556:1}{spell:122556} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'CD 4',
            timer: '00:00:30',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:30,SAA:122556:1}{spell:122556} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'CD 5',
            timer: '00:00:40',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:40,SAA:122556:1}{spell:122556} - [ATTRIBS] \n`,
        },
    ],
};

export const Shekzeer: Boss = {
    id: 'shekzeer',
    name: 'Shekzeer',
    img: 'shekzeer.png',
    spells: [
        {
            isChecked: true,
            name: 'Explo 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:17,SCC:123504:1}{spell:123504} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Explo 2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:17,SCC:123504:2}{spell:123504} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Explo 3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:17,SCC:123504:3}{spell:123504} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Explo 4',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:17,SCC:123504:4}{spell:123504} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n`,
        },
        {
            isChecked: true,
            name: 'Fear 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:1}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:2}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:3}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 4',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:4}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 5',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:5}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 6',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:6}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 7',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:7}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 8',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:8}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fear 9',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124862:9}{spell:124862} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n`,
        },
        {
            isChecked: true,
            name: 'Calamity 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124845:1}{spell:124845} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Calamity 2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124845:2}{spell:124845} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Calamity 3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124845:3}{spell:124845} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Calamity 4',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124845:4}{spell:124845} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Calamity 5',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124845:5}{spell:124845} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Calamity 6',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124845:6}{spell:124845} - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Calamity 7',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:04,SCC:124845:7}{spell:124845} - [ATTRIBS] \n`,
        },
    ],
};

export const HeartOfFear: Boss[] = [
    Zorlok,
    Tayak,
    Garalon,
    Meljarak,
    Unsok,
    Shekzeer,
];

export const StoneGuards: Boss = {
    id: 'stone-guard',
    name: 'Stone Guards',
    img: 'stone-guard.png',
    spells: [
        {
            isChecked: true,
            name: 'Explo 1',
            timer: '00:01:05',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 51052, count: 999 }, // AMZ
                        { cdId: 76577, count: 999 }, // Smoke Bomb
                        { cdId: 98008, count: 999 }, // SLT
                        { cdId: 62618, count: 999 }, // Dome
                    ],
                },
            ],
            noteTemplate: `{time:01:05}{spell:115817} Explo1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Painting',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffc69b6d Painting |r \n`,
        },
        {
            isChecked: true,
            name: '99%',
            timer: '00:01:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:15,e,HPS_stone_99}{spell:116304} 99% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '66%',
            timer: '00:02:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:17,e,HPS_stone_66}{spell:116304} 66% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '33%',
            timer: '00:03:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:17,e,HPS_stone_33}{spell:116304} 33% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Rota CD Tank',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffc69b6d Rota CD Tank |r \n`,
        },
        {
            isChecked: true,
            name: 'CD 1',
            timer: '00:01:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 33206, count: 1 }, // Pain Supp
                    ],
                },
            ],
            noteTemplate: `{time:00:03} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: 'CD 2',
            timer: '00:01:14',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.targetedDamageReduc, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:14,SCC:33206:1} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: 'CD 3',
            timer: '00:01:28',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.targetedDamageReduc, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:28,SCC:33206:1} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: 'CD 4',
            timer: '00:01:36',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.targetedDamageReduc, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:36,SCC:33206:1} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: 'CD 5',
            timer: '00:01:50',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.targetedDamageReduc, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:50,SCC:33206:1} - [ATTRIBS] \n`, // Joueur
        },
        {
            isChecked: true,
            name: 'CD 6',
            timer: '00:02:06',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.targetedDamageReduc, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:64,SCC:33206:1} - [ATTRIBS] \n`, // Joueur
        },
    ],
};

export const Feng: Boss = {
    id: 'feng',
    name: 'Feng',
    img: 'feng.png',
    spells: [
        {
            isChecked: true,
            name: 'Arcane phase',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffff00ff Arcane phase |r \n`,
        },
        {
            isChecked: true,
            name: 'AV 1',
            timer: '00:00:25',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 114049, count: 1 }, // Ascendance
                        { cdId: 33891, count: 1 }, // TOL
                        { cdId: 76577, count: 1 }, // Smoke Bomb
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SAA:116364:1}{spell:116365} AV1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'AV 2',
            timer: '00:00:50',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 62618, count: 1 }, // Dome
                        { cdId: 114049, count: 1 }, // Ascendance
                        { cdId: 33891, count: 1 }, // TOL
                        { cdId: 740, count: 1 }, // Tranqui
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SAA:116364:2}{spell:116365} AV2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Earth phase',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffff00ff Earth phase |r \n`,
        },
        {
            isChecked: true,
            name: 'EP 1',
            timer: '00:04:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:116018:1}{spell:116018} EP1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'EP 2',
            timer: '00:04:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 76577, count: 1 }, // Smoke Bomb
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 114049, count: 1 }, // Ascendance
                        { cdId: 33891, count: 1 }, // TOL
                        { cdId: 62618, count: 1 }, // Dome
                        { cdId: 98008, count: 1 }, // SLT
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:116018:2}{spell:116040} EP2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'EP 3',
            timer: '00:05:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:116018:3}{spell:116040} EP3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Fire phase',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffff00ff Fire phase |r \n`,
        },
        {
            isChecked: true,
            name: 'DF 1',
            timer: '00:06:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:15,SCC:116711:1}{spell:116711} DF1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'DF 1',
            timer: '00:06:05',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.reducMagic, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:35,SCC:116711:1}{spell:116711} DF1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'DF 2',
            timer: '00:06:10',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:15,SCC:116711:2}{spell:116711} DF2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'DF 2',
            timer: '00:06:15',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.reducMagic, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:35,SCC:116711:2}{spell:116711} DF2 - [ATTRIBS] \n`,
        },
    ],
};

export const Garalaj: Boss = {
    id: 'garalaj',
    name: "Gara'laj",
    img: 'garalaj.png',
    spells: [
        {
            isChecked: true,
            name: 'Totem 3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCC:116174:3}{spell:116174} Totem3 - [ATTRIBS] \n`, // Nom joueur
        },
        {
            isChecked: true,
            name: 'Totem 4',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCC:116174:4}{spell:116174} Totem4 - [ATTRIBS] \n`, // Nom joueur
        },
        {
            isChecked: true,
            name: 'P2',
            timer: '00:05:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n P2 \n`,
        },
        {
            isChecked: true,
            name: '20%',
            timer: '00:05:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 62618, count: 1 }, // Dome
                        { cdId: 114049, count: 1 }, // Ascendance
                    ],
                },
            ],
            noteTemplate: `{time:00:10,e,HPS_gara_20}{spell:117752} 20% -  [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '15%',
            timer: '00:05:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 98008, count: 1 }, // SLT
                        { cdId: 33891, count: 1 }, // TOL
                        { cdType: ECooldownType.supportHealing, count: 2 },
                    ],
                },
            ],
            noteTemplate: `{time:00:10,e,HPS_gara_15}{spell:117752} 15% -  [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '10%',
            timer: '00:06:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 62618, count: 1 }, // Dome
                        { cdId: 114049, count: 1 }, // Ascendance
                        { cdId: 33891, count: 1 }, // TOL
                        { cdType: ECooldownType.supportHealing, count: 2 },
                    ],
                },
            ],
            noteTemplate: `{time:00:10,e,HPS_gara_10}{spell:117752} 10% -  [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '5%',
            timer: '00:06:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 98008, count: 999 }, // SLT
                        { cdId: 76577, count: 999 }, // Smoke
                        { cdId: 740, count: 999 }, // Tranqui
                        { cdType: ECooldownType.supportHealing, count: 99 },
                    ],
                },
            ],
            noteTemplate: `{time:00:10,e,HPS_gara_5}{spell:117752} 5% -  [ATTRIBS] \n`,
        },
    ],
};

export const SpiritKings: Boss = {
    id: 'spirit-kings',
    name: 'The Spirit Kings',
    img: 'spirit-kings.png',
    spells: [
        {
            isChecked: true,
            name: 'Qiang',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffc69b6d Qiang |r \n`,
        },
        {
            isChecked: true,
            name: 'Shield 1',
            timer: '00:00:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 98008, count: 1 }, // SLT
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:117961:1}{spell:117961} Shield1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Shield 2',
            timer: '00:01:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdId: 98008, count: 1 }, // SLT
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:117961:2}{spell:117961} Shield2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Shield 3',
            timer: '00:01:30',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:117961:3}{spell:117961} Shield3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Zian',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffc69b6d Zian |r \n`,
        },
        {
            isChecked: true,
            name: 'SoD 1',
            timer: '00:02:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:117697:1}{spell:117697} SoD1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'SoD 2',
            timer: '00:02:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:117697:2}{spell:117697} SoD2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'SoD 3',
            timer: '00:03:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:117697:3}{spell:117697} SoD3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Meng',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffc69b6d Meng |r \n`,
        },
        {
            isChecked: true,
            name: 'MS 1',
            timer: '00:04:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 98008, count: 1 }, // SLT
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
                {
                    priority: 2,
                    expectedCooldowns: [
                        { cdId: 62618, count: 1 }, // Dome
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],

            noteTemplate: `{time:00:03,SCS:117708:1}{spell:117708} MS1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 2',
            timer: '00:04:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 98008, count: 1 }, // SLT
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
                {
                    priority: 2,
                    expectedCooldowns: [
                        { cdId: 62618, count: 1 }, // Dome
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:117708:2}{spell:117708} MS2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'MS 3',
            timer: '00:05:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 98008, count: 1 }, // SLT
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
                {
                    priority: 2,
                    expectedCooldowns: [
                        { cdId: 62618, count: 1 }, // Dome
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:117708:3}{spell:117708} MS3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n`,
        },
        {
            isChecked: true,
            name: 'Cow 1',
            timer: '00:04:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                    ],
                },
            ],
            noteTemplate: `{time:00:26,SAA:117756:1}{spell:117756} Cow1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Cow 2',
            timer: '00:04:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                    ],
                },
            ],
            noteTemplate: `{time:00:26,SAA:117756:2}{spell:117756} Cow2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Cow 3',
            timer: '00:05:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.supportHealing, count: 1 },
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                    ],
                },
            ],
            noteTemplate: `{time:00:26,SAA:117756:3}{spell:117756} Cow3 - [ATTRIBS] \n`,
        },
    ],
};

export const Elegon: Boss = {
    id: 'elegon',
    name: 'Elegeon',
    img: 'elegon.png',
    spells: [
        {
            isChecked: true,
            name: 'FS 1',
            timer: '00:00:10',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 62618, count: 1 }, // Dome
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SAA:129711:1}{spell:129711} FS1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'FS 2',
            timer: '00:00:20',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 62618, count: 1 }, // Dome
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SAA:129711:2}{spell:129711} FS2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'FS 3',
            timer: '00:00:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 62618, count: 1 }, // Dome
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SAA:129711:3}{spell:129711} FS3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'FS 4',
            timer: '00:00:40',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 62618, count: 1 }, // Dome
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SAA:129711:4}{spell:129711} FS4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Phase 2.1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffc69b6d Phase 2.1 |r \n`,
        },
        {
            isChecked: true,
            name: 'Spark 5',
            timer: '00:01:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:07,SCC:119358:5}{spell:119360} Spark5 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Spark 6',
            timer: '00:01:10',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:07,SCC:119358:6}{spell:119360} Spark6 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Spark 7',
            timer: '00:01:20',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:07,SCC:119358:7}{spell:119360} Spark7 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Phase 2.2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffc69b6d Phase 2.2 |r \n`,
        },
        {
            isChecked: true,
            name: 'Spark 5',
            timer: '00:01:30',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.supportHealing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:07,SCC:119358:13}{spell:119360} Spark4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Spark 6',
            timer: '00:01:40',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:07,SCC:119358:14}{spell:119360} Spark5 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Spark 7',
            timer: '00:01:50',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdId: 97462, count: 1 }, // War Cry
                        { cdId: 114203, count: 1 }, // Demo banner
                        { cdType: ECooldownType.healing, count: 1 },
                    ],
                },
            ],
            noteTemplate: `{time:00:07,SCC:119358:15}{spell:119360} Spark6 - [ATTRIBS] \n`,
        },
        {
            isChecked: false,
            name: '',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `\n |cffc69b6d Phase 3 |r \n`,
        },
        {
            isChecked: false,
            name: '15s',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:15,SAA:116994:1}{spell:116994} - [ATTRIBS] \n`,
        },
        {
            isChecked: false,
            name: '27s',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:27,SAA:116994:1}{spell:116994} - [ATTRIBS] \n`,
        },
        {
            isChecked: false,
            name: '39s',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:39,SAA:116994:1}{spell:116994} - [ATTRIBS] \n`,
        },
        {
            isChecked: false,
            name: '51s',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:51,SAA:116994:1}{spell:116994} - [ATTRIBS] \n`,
        },
        {
            isChecked: false,
            name: '1mn03s',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:01:03,SAA:116994:1}{spell:116994} - [ATTRIBS] \n`,
        },
    ],
};

export const MoguShanVault: Boss[] = [
    StoneGuards,
    Feng,
    Garalaj,
    SpiritKings,
    Elegon,
];

export const Protectors: Boss = {
    id: 'protectors',
    name: 'Protectors',
    img: 'protectors.png',
    spells: [
        {
            isChecked: true,
            name: 'Phase 3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cff00ffff Phase3 |r \n`,
        },
        {
            isChecked: true,
            name: 'Defile 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:117975:1}{spell:117975} Defile 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Defile 2',
            timer: '00:00:39',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:39,SCS:117975:1}{spell:117975} Defile 2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Defile 3',
            timer: '00:01:18',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:01:18,SCS:117975:1}{spell:117975} Defile 3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Defile 4',
            timer: '00:01:57',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:01:57,SCS:117975:1}{spell:117975} Defile 4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Defile 5',
            timer: '00:02:36',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:02:36,SCS:117975:1}{spell:117975} Defile 5 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Defile 6',
            timer: '00:03:15',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:03:15,SCS:117975:1}{spell:117975} Defile 6 - [ATTRIBS] \n`,
        },
    ],
};

export const Tsulong: Boss = {
    id: 'tsulong',
    name: 'Tsulong',
    img: 'tsulong.png',
    spells: [
        {
            isChecked: true,
            name: 'Phase sun 1.1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffffff00 Phase sun 1.1 |r \n`,
        },
        {
            isChecked: true,
            name: 'Breath 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122855:1}{spell:122855} Breath 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Breath 2',
            timer: '00:00:32',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:32,SCS:122855:1}{spell:122855} Breath 2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Breath 3',
            timer: '00:01:02',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:01:02,SCS:122855:1}{spell:122855} Breath 3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Breath 4',
            timer: '00:01:31',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:01:31,SCS:122855:1}{spell:122855} Breath 4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Phase sun 1.2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffffff00 Phase sun 1.2 |r \n`,
        },
        {
            isChecked: true,
            name: 'Breath 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:122855:6}{spell:122855} Breath 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Breath 2',
            timer: '00:00:32',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:32,SCS:122855:6}{spell:122855} Breath 2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Breath 3',
            timer: '00:01:02',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:01:02,SCS:122855:6}{spell:122855} Breath 3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Breath 4',
            timer: '00:01:31',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:01:31,SCS:122855:6}{spell:122855} Breath 4 - [ATTRIBS] \n`,
        },
    ],
};

export const LeiShi: Boss = {
    id: 'leishi',
    name: 'Lei Shi',
    img: 'leishi.png',
    spells: [
        {
            isChecked: true,
            name: 'Capacité spéciales',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffff0000 Capacité spéciales |r \n`,
        },
        {
            isChecked: true,
            name: 'Run 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:123461:1}{spell:123461} Run 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Run 2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:123461:2}{spell:123461} Run 2- [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Run 3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:123461:3}{spell:123461} Run 3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Run 4',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:03,SCS:123461:4}{spell:123461} Run 4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'TANKS',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `|cffff0000CD TANKS |r \n`,
        },
        {
            isChecked: true,
            name: '80%',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:10,e,HPS_leishi_80}{spell:117752} 80% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '60%',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:10,e,HPS_leishi_60}{spell:117752} 60% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '40%',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:10,e,HPS_leishi_40}{spell:117752} 40% - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: '20%',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [],
            noteTemplate: `{time:00:10,e,HPS_leishi_20}{spell:117752} 20% - [ATTRIBS] \n`,
        },
    ],
};

export const Terasse: Boss[] = [Protectors, Tsulong, LeiShi];

export const ALL_BOSSES: Boss[] = [
    StoneGuards,
    Feng,
    Garalaj,
    SpiritKings,
    Elegon,
    Zorlok,
    Tayak,
    Garalon,
    Meljarak,
    Unsok,
    Shekzeer,
    Protectors,
    Tsulong,
    LeiShi,
];

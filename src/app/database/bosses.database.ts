import { Boss } from '../common/models/bosses.models';
import { ECooldownType } from '../common/models/cds.models';

export const Zorlok: Boss = {
    name: "Zor'Lok",
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
            name: 'F&V 3',
            timer: '00:00:03',
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
            noteTemplate: `{time:00:03,SCS:122713:3}{spell:122713} F&V 3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'F&V 4',
            timer: '00:00:04',
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
            noteTemplate: `{time:00:03,SCS:122713:4}{spell:122713} F&V 4 - [ATTRIBS] \n`,
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
            noteTemplate: `{time:00:42,SCC:123833:1}{spell:122713} F&V 1 - [ATTRIBS] \n`,
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
            noteTemplate: `{time:01:31,SCC:123833:1}{spell:122713} F&V 2 - [ATTRIBS] \n`,
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
            noteTemplate: `{time:02:18,SCC:123833:1}{spell:122713} F&V 3 - [ATTRIBS] \n`,
        },
    ],
};

export const Tayak: Boss = {
    name: "Tay'ak",
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
    name: 'Garalon',
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

export const HeartOfFear: Boss[] = [Zorlok, Tayak, Garalon];

import { Boss } from '../common/models/bosses.models';
import { ECooldownType } from '../common/models/cds.models';

export const Morshok: Boss = {
    name: 'Morshok',
    spells: [
        {
            isChecked: true,
            name: 'Stomp 1',
            timer: '00:00:16',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.manaRegen, count: 1 },
                        { cdType: ECooldownType.raidHealingBuff, count: 1 },
                    ],
                    priority: 2,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:1}Stomp 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 2',
            timer: '00:00:29',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:2}Stomp 2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 4',
            timer: '00:00:43',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:4}Stomp 4 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 6',
            timer: '00:01:42',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:6}Stomp 6 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 8',
            timer: '00:01:56',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:8}Stomp 8 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 10',
            timer: '00:02:09',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:10}Stomp 10 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 12 - Everyone Personals',
            timer: '00:02:24',
            attribs: [],
            exceptedCds: [],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:12}Stomp 12 - Everyone Personals \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 14',
            timer: '00:03:22',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:14}Stomp 14 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 16',
            timer: '00:03:36',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:16}Stomp 16 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 18',
            timer: '00:03:51',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:18}Stomp 18 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'Stomp 20',
            timer: '00:04:07',
            attribs: [],
            exceptedCds: [
                {
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                    ],
                    priority: 1,
                },
            ],
            iconUrl: new URL(
                'https://wow.zamimg.com/images/wow/icons/large/inv_misc_apexis_crystal.jpg',
            ),
            noteTemplate: `{time:00:00,SCS:103414:20}Stomp 20 - [ATTRIBS] \n`,
        },
    ],
};

export const Zorlok: Boss = {
    name: "Zor'Lok",
    spells: [
        {
            isChecked: true,
            name: 'F&V 1',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:1}{spell:122713} F&V 1 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'F&V 2',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:2}{spell:122713} F&V 2 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'F&V 3',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:00:03,SCS:122713:3}{spell:122713} F&V 3 - [ATTRIBS] \n`,
        },
        {
            isChecked: true,
            name: 'F&V 4',
            timer: '00:00:00',
            attribs: [],
            exceptedCds: [
                {
                    priority: 1,
                    expectedCooldowns: [
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
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
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
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
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
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
                        { cdType: ECooldownType.reducPhysic, count: 1 },
                        { cdType: ECooldownType.healing, count: 1 },
                        { cdType: ECooldownType.increasePoolHp, count: 1 },
                        { cdId: 114203, count: 1 }, // Banner war
                    ],
                },
            ],
            noteTemplate: `{time:02:18,SCC:123833:1}{spell:122713} F&V 3 - [ATTRIBS] \n`,
        },
    ],
};

export const DragonSoul: Boss[] = [Morshok];
export const HeartOfFear: Boss[] = [Zorlok];

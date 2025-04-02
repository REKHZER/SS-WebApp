import { Boss } from '../common/models/bosses.models';
import { ECooldownType } from '../common/models/cds.models';

export const Morshok: Boss = {
    name: 'Morshok',
    spells: [
        {
            isChecked: true,
            name: 'Stomp 1',
            spellId: 103414,
            occurance: 1,
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
            spellId: 103414,
            occurance: 2,
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
            spellId: 103414,
            occurance: 4,
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
            spellId: 103414,
            occurance: 6,
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
            spellId: 103414,
            occurance: 8,
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
            spellId: 103414,
            occurance: 10,
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
            spellId: 103414,
            occurance: 12,
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
            spellId: 103414,
            occurance: 14,
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
            spellId: 103414,
            occurance: 16,
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
            spellId: 103414,
            occurance: 18,
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
            spellId: 103414,
            occurance: 20,
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

export const DragonSoul: Boss[] = [Morshok];

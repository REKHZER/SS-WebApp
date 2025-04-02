import { Boss } from '../../common/models/bosses.models';
import {
    EPlayerClass,
    EPlayerSpec,
} from '../../common/models/player-classes.models';
import { MRTPlayer } from '../../common/models/players.models';
import { RaidHelperRaidDrop } from '../../common/models/raid-helper.models';
import { getPlayerNameFromDiscordId } from '../../common/utils/player-names.utils';
import { ALL_CLASSES_WITH_SPECS } from '../../database/player-classes.database';

// SAA: SPELL_AURA_APPLIED,
// SAR: SPELL_AURA_REMOVED,
// SCS: SPELL_CAST_START,
// SCC: SPELL_CAST_SUCCESS,
export const bossNoteToMRTNote = (boss: Boss) => {
    const checkedSpells = boss.spells.filter(x => x.isChecked);

    let note = '';

    for (const spell of checkedSpells) {
        let attribNote = '';
        let index = 0;
        for (const attrib of spell.attribs) {
            if (index > 0) {
                attribNote += ' | ';
            } else {
                attribNote += ' ';
            }
            attribNote += `${attrib.player.name} {spell:${attrib.cd.spellId}}`;
            index++;
        }
        note += spell.noteTemplate.replace('[ATTRIBS]', attribNote);
    }

    console.log(note);
};

export const raidDropToRoster = (
    raidDrop: RaidHelperRaidDrop[],
): MRTPlayer[] => {
    return raidDrop.reduce<MRTPlayer[]>((acc, curr) => {
        const classFromSpec = getClassFromSpecId(curr.spec_emote);
        const spec = getSpecFromId(curr.spec_emote);
        return [
            ...acc,
            {
                name: getPlayerNameFromDiscordId(curr.userid) ?? curr.name,
                class: classFromSpec,
                mainSpec: spec,
            },
        ];
    }, []);
};

const getClassFromSpecId = (specId: string): EPlayerClass => {
    const playerClass = ALL_CLASSES_WITH_SPECS.find(x =>
        x.specs.some(y => y.specId === +specId),
    )?.class;
    if (!playerClass) {
        throw new Error('SPEC ID ERROR FOR CLASS');
    }

    return playerClass;
};

const getSpecFromId = (specId: string): EPlayerSpec => {
    const playerSpec = ALL_CLASSES_WITH_SPECS.map(x => x.specs)
        .flat()
        .find(x => x.specId === +specId)?.spec;
    if (!playerSpec) {
        throw new Error('SPEC ID ERROR');
    }

    return playerSpec;
};

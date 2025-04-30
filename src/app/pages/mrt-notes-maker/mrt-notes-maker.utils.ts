import { Boss } from '../../common/models/bosses.models';
import {
    EPlayerClass,
    EPlayerSpec,
} from '../../common/models/player-classes.models';
import { MRTPlayer, Player2 } from '../../common/models/players.models';
import { RaidHelperRaidDrop } from '../../common/models/raid-helper.models';
import { getPlayerNameFromDiscordId } from '../../common/utils/player-names.utils';
import { EIcons } from '../../database/icons.database';
import { ALL_CLASSES_WITH_SPECS } from '../../database/player-classes.database';

// SAA: SPELL_AURA_APPLIED,
// SAR: SPELL_AURA_REMOVED,
// SCS: SPELL_CAST_START,
// SCC: SPELL_CAST_SUCCESS,
export const bossNoteToMRTNote = (boss: Boss): string => {
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

    console.log('\n\n ~ bossNoteToMRTNote ~ note:', note);
    return note;
};

export const raidDropToRoster = (
    raidDrop: RaidHelperRaidDrop[],
): MRTPlayer[] => {
    console.log('\n\n ~ raidDrop:', raidDrop);
    return raidDrop.reduce<MRTPlayer[]>((acc, curr) => {
        const classFromSpec = getClassFromSpecId(curr.class + curr.spec);
        const spec = getSpecFromId(curr.class + curr.spec);
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

const getClassFromSpecId = (classSpec: string): EPlayerClass => {
    const playerClass = ALL_CLASSES_WITH_SPECS.find(x =>
        x.specs.some(y => y.spec === classSpec),
    )?.class;
    if (!playerClass) {
        throw new Error('SPEC ID ERROR FOR CLASS');
    }

    return playerClass;
};

const getSpecFromId = (classSpec: string): EPlayerSpec => {
    const playerSpec = ALL_CLASSES_WITH_SPECS.map(x => x.specs)
        .flat()
        .find(x => x.spec === classSpec)?.spec;
    if (!playerSpec) {
        throw new Error('SPEC ID ERROR');
    }

    return playerSpec;
};

export const getClassIcon = (classSpec: EPlayerSpec): EIcons => {
    switch (classSpec) {
        case EPlayerSpec.DeathKnightBlood:
            return EIcons.BloodDK;
        case EPlayerSpec.DeathKnightFrost:
            return EIcons.FrostDK;
        case EPlayerSpec.DeathKnightUnholy:
            return EIcons.HolyDK;

        case EPlayerSpec.DruidBalance:
            return EIcons.BalanceDruid;
        case EPlayerSpec.DruidFeral:
            return EIcons.FeralDruid;
        case EPlayerSpec.DruidGuardian:
            return EIcons.GuardianDruid;
        case EPlayerSpec.DruidRestoration:
            return EIcons.RestoDruid;

        case EPlayerSpec.HunterBeastMastery:
            return EIcons.BeastmasterHunt;
        case EPlayerSpec.HunterMarksmanship:
            return EIcons.MarskmanHunt;
        case EPlayerSpec.HunterSurvival:
            return EIcons.SurvivalHunt;

        case EPlayerSpec.MageArcane:
            return EIcons.ArcaneMage;
        case EPlayerSpec.MageFire:
            return EIcons.FireMage;
        case EPlayerSpec.MageFrost:
            return EIcons.FrostMage;

        case EPlayerSpec.PaladinHoly:
            return EIcons.HolyPaladin;
        case EPlayerSpec.PaladinProtection:
            return EIcons.ProtPaladin;
        case EPlayerSpec.PaladinRetribution:
            return EIcons.RetPaladin;

        case EPlayerSpec.PriestDiscipline:
            return EIcons.DiscoPriest;
        case EPlayerSpec.PriestHoly:
            return EIcons.HolyPriest;
        case EPlayerSpec.PriestShadow:
            return EIcons.ShadowPriest;

        case EPlayerSpec.RogueAssassination:
            return EIcons.AssaRogue;
        case EPlayerSpec.RogueCombat:
            return EIcons.CombatRogue;
        case EPlayerSpec.RogueSubtlety:
            return EIcons.SubRogue;

        case EPlayerSpec.ShamanElemental:
            return EIcons.ElemShaman;
        case EPlayerSpec.ShamanEnhancement:
            return EIcons.AmelioSham;
        case EPlayerSpec.ShamanRestoration:
            return EIcons.RestoSham;

        case EPlayerSpec.WarArms:
            return EIcons.ArmWar;
        case EPlayerSpec.WarFury:
            return EIcons.FuryWar;
        case EPlayerSpec.WarProtection:
            return EIcons.ProtWar;

        case EPlayerSpec.WarlockAffliction:
            return EIcons.AfliLock;
        case EPlayerSpec.WarlockDemonology:
            return EIcons.DemoLock;
        case EPlayerSpec.WarlockDestruction:
            return EIcons.DestroLock;

        case EPlayerSpec.MonkBrewmaster:
            return EIcons.BrewmasterMonk;
        case EPlayerSpec.MonkMistweaver:
            return EIcons.MistweaverMonk;
        case EPlayerSpec.MonkWindwalker:
            return EIcons.WindwalkerMonk;

        default:
            return EIcons.ArmWar;
    }
};

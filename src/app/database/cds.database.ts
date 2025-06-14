import { Cooldown, ECooldownType } from '../common/models/cds.models';
import { EPlayerSpec } from '../common/models/player-classes.models';

export const ALL_CDS: Cooldown[] = [
    {
        name: 'Smoke Bomb',
        specs: [
            EPlayerSpec.RogueAssassination,
            EPlayerSpec.RogueCombat,
            EPlayerSpec.RogueSubtlety,
        ],
        cooldown: '00:03:00',
        spellId: 76577,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_rogue_smoke.jpg',
        ),
        types: [ECooldownType.reducMagic, ECooldownType.reducPhysic],
        priority: 3,
    },
    {
        name: 'Divine Guardian',
        specs: [EPlayerSpec.PaladinProtection],
        cooldown: '00:03:00',
        spellId: 70940,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordbarrier.jpg',
        ),
        types: [ECooldownType.reducMagic, ECooldownType.reducPhysic],
        priority: 1,
    },
    {
        name: 'Hand of Sacrifice',
        specs: [EPlayerSpec.PaladinHoly],
        cooldown: '00:02:00',
        spellId: 6940,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_sealofsacrifice.jpg',
        ),
        types: [ECooldownType.targetedDamageReduc],
        priority: 1,
    },
    {
        name: 'Hand of Sacrifice',
        specs: [EPlayerSpec.PaladinRetribution],
        cooldown: '00:02:00',
        spellId: 6940,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_sealofsacrifice.jpg',
        ),
        types: [ECooldownType.targetedDamageReduc],
        priority: 2,
    },
    {
        name: 'Guardian of Ancient Kings',
        specs: [EPlayerSpec.PaladinHoly],
        cooldown: '00:05:00',
        spellId: 86150,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_heroism.jpg',
        ),
        types: [ECooldownType.personalHealingBuff],
        priority: 1,
    },
    {
        name: 'Avenging Wrath',
        specs: [EPlayerSpec.PaladinHoly],
        cooldown: '00:03:00',
        spellId: 31884,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_avenginewrath.jpg',
        ),
        types: [ECooldownType.personalHealingBuff],
        priority: 1,
    },
    {
        name: 'Aura Mastery',
        specs: [EPlayerSpec.PaladinHoly],
        cooldown: '00:02:00',
        spellId: 31821,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_auramastery.jpg',
        ),
        types: [ECooldownType.reducMagic, ECooldownType.reducPhysic],
        priority: 2,
    },
    {
        name: 'Aura Mastery',
        specs: [EPlayerSpec.PaladinRetribution],
        cooldown: '00:02:00',
        spellId: 31821,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_auramastery.jpg',
        ),
        types: [ECooldownType.reducMagic],
        priority: 1,
    },
    {
        name: 'Tranquility',
        specs: [EPlayerSpec.DruidRestoration],
        cooldown: '00:08:00',
        spellId: 740,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_tranquility.jpg',
        ),
        types: [ECooldownType.healing],
        priority: 1,
    },
    {
        name: 'Tranquility',
        specs: [EPlayerSpec.DruidBalance],
        cooldown: '00:08:00',
        spellId: 740,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_tranquility.jpg',
        ),
        types: [ECooldownType.healing],
        priority: 2,
    },
    {
        name: 'Tranquility',
        specs: [EPlayerSpec.DruidFeral],
        cooldown: '00:08:00',
        spellId: 740,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_nature_tranquility.jpg',
        ),
        types: [ECooldownType.healing],
        priority: 3,
    },
    {
        name: 'Tree of Life',
        specs: [EPlayerSpec.DruidRestoration],
        cooldown: '00:03:00',
        spellId: 33891,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_druid_treeoflife.jpg',
        ),
        types: [ECooldownType.personalHealingBuff],
        priority: 1,
    },
    {
        name: 'Mana Tide Totem',
        specs: [EPlayerSpec.ShamanRestoration],
        cooldown: '00:03:00',
        spellId: 12,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_frost_summonwaterelemental.jpg',
        ),
        types: [ECooldownType.manaRegen],
        priority: 1,
    },
    {
        name: 'Spirit Link Totem',
        specs: [EPlayerSpec.ShamanRestoration],
        cooldown: '00:03:00',
        spellId: 98008,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_shaman_spiritlink.jpg',
        ),
        types: [ECooldownType.reducMagic, ECooldownType.reducPhysic],
        priority: 2,
    },
    {
        name: 'Power Word: Barrier',
        specs: [EPlayerSpec.PriestDiscipline],
        cooldown: '00:03:00',
        spellId: 62618,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_powerwordbarrier.jpg',
        ),
        types: [ECooldownType.reducMagic, ECooldownType.reducPhysic],
        priority: 1,
    },
    {
        name: 'Divine Hymn',
        specs: [EPlayerSpec.PriestHoly],
        cooldown: '00:08:00',
        spellId: 64843,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_divinehymn.jpg',
        ),
        types: [ECooldownType.healing],
        priority: 2,
    },
    {
        name: 'Hymn of Hope',
        specs: [EPlayerSpec.PriestDiscipline, EPlayerSpec.PriestHoly],
        cooldown: '00:06:00',
        spellId: 64901,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_symbolofhope.jpg',
        ),
        types: [ECooldownType.manaRegen],
        priority: 2,
    },
    {
        name: 'Pain Suppression',
        specs: [EPlayerSpec.PriestDiscipline, EPlayerSpec.PriestHoly],
        cooldown: '00:03:00',
        spellId: 33206,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_holy_painsupression.jpg',
        ),
        types: [ECooldownType.targetedDamageReduc],
        priority: 1,
    },
    {
        name: 'Rallying Cry',
        specs: [
            EPlayerSpec.WarArms,
            EPlayerSpec.WarFury,
            EPlayerSpec.WarProtection,
        ],
        cooldown: '00:03:00',
        spellId: 97462,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_toughness.jpg',
        ),
        types: [ECooldownType.increasePoolHp],
        priority: 1,
    },
    {
        name: 'Demoralizing Banner',
        specs: [
            EPlayerSpec.WarArms,
            EPlayerSpec.WarFury,
            EPlayerSpec.WarProtection,
        ],
        cooldown: '00:03:00',
        spellId: 114203,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/demoralizing_banner.jpg',
        ),
        types: [ECooldownType.reducPhysic, ECooldownType.reducMagic],
        priority: 10,
    },
    {
        name: 'Anti-Magic Zone',
        specs: [EPlayerSpec.DeathKnightUnholy],
        cooldown: '00:02:00',
        spellId: 51052,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_antimagiczone.jpg',
        ),
        types: [ECooldownType.reducMagic],
        priority: 1,
    },
    {
        name: 'Healing Tide Totem',
        specs: [EPlayerSpec.ShamanRestoration],
        cooldown: '00:03:00',
        spellId: 108280,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_healingtide.jpg',
        ),
        types: [ECooldownType.healing],
        priority: 1,
    },
    {
        name: 'Healing Tide Totem',
        specs: [EPlayerSpec.ShamanElemental, EPlayerSpec.ShamanEnhancement],
        cooldown: '00:03:00',
        spellId: 108280,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_healingtide.jpg',
        ),
        types: [ECooldownType.supportHealing],
        priority: 2,
    },
    {
        name: 'Ancestral Guidance',
        specs: [EPlayerSpec.ShamanElemental, EPlayerSpec.ShamanEnhancement],
        cooldown: '00:02:00',
        spellId: 108281,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_shaman_ancestralguidance.jpg',
        ),
        types: [ECooldownType.supportHealing],
        priority: 1,
    },
    {
        name: 'Stampeding Roar',
        specs: [
            EPlayerSpec.DruidBalance,
            EPlayerSpec.DruidFeral,
            EPlayerSpec.DruidGuardian,
            EPlayerSpec.DruidRestoration,
        ],
        cooldown: '00:02:00',
        spellId: 77761,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_druid_stamedingroar.jpg',
        ),
        types: [ECooldownType.speedBoost],
        priority: 1,
    },
    {
        name: 'Vigilance',
        specs: [
            EPlayerSpec.WarArms,
            EPlayerSpec.WarFury,
            EPlayerSpec.WarProtection,
        ],
        cooldown: '00:02:00',
        spellId: 114030,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_warrior_vigilance.jpg',
        ),
        types: [ECooldownType.targetedDamageReduc],
        priority: 3,
    },
    {
        name: 'Fortifying Brew',
        specs: [EPlayerSpec.MonkBrewmaster],
        cooldown: '00:03:00',
        spellId: 115203,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/ability_monk_fortifyingale_new.jpg',
        ),
        types: [ECooldownType.personalWall],
        priority: 2,
    },
    {
        name: 'Icebound Fortitude',
        specs: [EPlayerSpec.DeathKnightBlood],
        cooldown: '00:03:00',
        spellId: 48792,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/spell_deathknight_iceboundfortitude.jpg',
        ),
        types: [ECooldownType.personalWall],
        priority: 2,
    },
    {
        name: 'Ascendance',
        specs: [EPlayerSpec.ShamanRestoration],
        cooldown: '00:03:00',
        spellId: 114049,
        iconUrl: new URL(
            'https://wow.zamimg.com/images/wow/icons/large/classic_spell_fire_elementaldevastation.jpg',
        ),
        types: [ECooldownType.personalHealingBuff],
        priority: 1,
    },
];

// increasePoolHp = 'increasePoolHp', // Cri war, Vampiric Blood, Frenzy Regen
// raidHealingBuff = 'raidHealingBuff', // Frenzy Regen, Vampiric Blood

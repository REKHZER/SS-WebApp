import { ALL_CDS } from '../../database/cds.database';
import { Boss } from '../models/bosses.models';
import {
    ECooldownType,
    Cooldown,
    CooldownAttrib,
    CooldownPlayer,
} from '../models/cds.models';
import { addISOTimes, isISOTimeGreater, ISOTime } from '../models/date.models';
import { MRTPlayer } from '../models/players.models';

export const SECURITY_TIMER: ISOTime = '00:00:10';

export const getAllRosterCds = (players: MRTPlayer[]): Cooldown[] =>
    players.reduce<Cooldown[]>((acc, curr) => {
        return [...acc, ...getPlayerCds(curr)];
    }, []);

export const getPlayerCds = (player: MRTPlayer): Cooldown[] =>
    ALL_CDS.filter(x => x.specs.includes(player.mainSpec));

export const getCdsOfType = (cdType: ECooldownType): Cooldown[] =>
    ALL_CDS.filter(x => x.types.includes(cdType));

export const getPlayersWithCdType = (
    players: MRTPlayer[],
    cdType: ECooldownType,
): MRTPlayer[] =>
    players.filter(x => getPlayerCds(x).filter(y => y.types.includes(cdType)));

export const getPlayersWithCd = (
    players: MRTPlayer[],
    cd: Cooldown,
): MRTPlayer[] =>
    players.filter(
        x => getPlayerCds(x).filter(y => y.spellId === cd.spellId).length > 0,
    );

export const getPlayerCdsOfType = (
    player: MRTPlayer,
    cdType: ECooldownType,
): Cooldown[] => getPlayerCds(player).filter(x => x.types.includes(cdType));

export const getCdsOfTypes = (cdTypes: ECooldownType[]): Cooldown[] =>
    cdTypes.reduce<Cooldown[]>((acc, curr) => {
        return [...acc, ...getCdsOfType(curr)];
    }, []);

export const getFilterCdsWithType = (
    cds: CooldownPlayer[],
    cdType: ECooldownType,
): CooldownPlayer[] => cds.filter(x => x.cd && x.cd.types.includes(cdType));

export const getCooldownPlayers = (players: MRTPlayer[]): CooldownPlayer[] =>
    players.reduce<CooldownPlayer[]>(
        (acc, player) => [
            ...acc,
            ...getPlayerCds(player).map(cd => ({
                player,
                cd,
            })),
        ],
        [],
    );

export const getAvailableCooldownPlayers = (
    players: MRTPlayer[],
    attribs: CooldownAttrib[],
    timer: ISOTime,
): CooldownPlayer[] => {
    return getCooldownPlayers(players)
        .filter(cd => {
            const attribOfPlayerCD = attribs.filter(
                y =>
                    y.cd &&
                    cd.cd &&
                    y.cd.spellId === cd.cd.spellId &&
                    y.player === cd.player,
            );

            if (!attribOfPlayerCD.length) {
                return true;
            }

            return (
                attribOfPlayerCD.length === 0 ||
                attribOfPlayerCD.every(
                    y =>
                        y.cd &&
                        cd.cd &&
                        y.cd.spellId === cd.cd.spellId &&
                        y.player === cd.player &&
                        !isISOTimeGreater(
                            addISOTimes(y.timer, y.cd.cooldown, SECURITY_TIMER),
                            timer,
                        ),
                )
            );
        })
        .sort((a, b) => (a.cd && b.cd ? a.cd.priority - b.cd.priority : 0)); // Trie par priorité croissante;
};

export const resetAttribs = (bossNote: Boss): Boss => {
    const boss = { ...bossNote };
    for (const spell of boss.spells) {
        spell.attribs = [];
    }
    return boss;
};

import { PLAYERS } from '../database/players.database';

export const getPlayerNameFromDiscordId = (
    discordId: string,
): string | undefined => {
    return PLAYERS.find(x => x.discordId === discordId)?.name;
};

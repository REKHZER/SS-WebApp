export interface RaidHelperRaidDrop {
    eventId: string;
    class: string;
    class_emote: string;
    color: string;
    isConfirmed: boolean;
    name: string;
    partyId: number;
    role_emote: string;
    signuptime: number;
    slotId: number;
    spec: string;
    spec_emote: string;
    userid: string;
}

export interface GetEventsResponse {
    currentPage: number;
    eventsOverall: number;
    eventsTransmitted: number;
    pages: number;
    postedEvents: RaidHelperEvent[];
}

export interface RaidHelperEvent {
    id: string;
    serverId: string;
    leaderId: string;
    leaderName: string;
    channelId: string;
    channelName: string;
    channelType: string;
    templateId: string;
    templateEmoteId: string;
    title: string;
    description: string;
    startTime: number;
    endTime: number;
    closingTime: number;
    date: string;
    time: string;
    advancedSettings: object;
    classes: object[];
    roles: object[];
    signUps: SignUp[];
    lastUpdated: number;
    softresId: string;
    color: string;
}

interface SignUp {
    id: number;
    entryTime: number;
    name: string;
    userId: string;
    className: EClassName;
}

export const AbsenceClassEmoteId = '612343589070045200';

export enum EClassName {
    Absence = 'Absence',
    Tentative = 'Tentative',
    Bench = 'Bench',
    Late = 'Late',
}

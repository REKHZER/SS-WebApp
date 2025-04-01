import { HOST_TAG_NAME } from '@angular/core';

export interface RaidDrop {
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

interface Event {
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
}

export const AbsenceClassEmoteId = '612343589070045200';

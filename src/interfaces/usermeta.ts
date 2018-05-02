export interface UserMeta {
    id: string;
}

export interface UserMetaEvent {
    eventId: string;
    name: string;
    date: Date;
}

export interface UserMetaMatch {
    eventId: string;
    matchId: string;
    name: string;
    date: Date;
}

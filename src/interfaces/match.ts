import { QlsBeachvolleyModel } from "./beachvolleyModel";

export interface QlsMatch {
    id?: string;
    name: string;
    description?: string;
    category: string;
    start: Date;
    end: Date;
    useLiveComments: boolean;
    enabled: boolean;
    liveComments?: QlsLiveComment[];
    data?: QlsBeachvolleyModel[];
}

export interface QlsLiveComment {
    date: Date;
    comment: string;
}
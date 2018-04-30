import { QlsBeachvolleyModel } from "./beachvolleyModel";

export interface QlsMatch {
    id: string;
    name: string;
    description?: string;
    categoryId: string;
    start: Date;
    end: Date;
    useLiveComments: boolean;
    enabled: boolean;
    liveComments?: QlsLiveComment[];
}

export interface QlsLiveComment {
    date: Date;
    comment: string;
}

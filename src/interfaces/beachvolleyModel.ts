export interface QlsBeachvolleyModel {
    id: string;
    name: QlsBeachvolleyModelName;
    points: QlsBeachvolleyModelPoints;
    timeouts: QlsBeachvolleyModelTimeouts;
    set: number;
    updateReason: QlsBeachvolleyModelUpdateReason;
    updateDate: Date;
}

export interface QlsBeachvolleyModelName {
    a: string;
    b: string;
}

export interface QlsBeachvolleyModelPoints {
    a: number;
    b: number;
}

export interface QlsBeachvolleyModelTimeouts {
    a: number;
    b: number;
}

export enum QlsBeachvolleyModelUpdateReason {
    GameStart = "GAMESTART",
    GameEnd = "GAMEEND",
    SetA = "SETA",
    SetB = "SETB",
    PointA = "POINTA",
    PointB = "POINTB",
    TimeoutA = "TIMEOUTA",
    TimeoutB = "TIMEOUTB"
}

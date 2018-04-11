export interface QlsBeachvolleyModel {
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
    GameStart,
    GameEnd,
    SetA,
    SetB,
    PointA,
    PointB,
    TimeoutA,
    TimeoutB
}


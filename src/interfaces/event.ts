import { QlsMatch } from "./match";

export interface QlsEvent {
    id: string;
    users: {[key: string]: boolean};
    name: string;
    description?: string;
    start: Date;
    end: Date;
    enabled: boolean;
}

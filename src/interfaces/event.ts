import { QlsMatch } from "./match";

export interface QlsEvent {
    id?: string;
    name: string;
    description?: string;
    start: Date;
    end: Date;
    enabled: boolean;
    matches?: QlsMatch[];
}

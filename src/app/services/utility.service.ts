import { Injectable } from "@angular/core";

@Injectable()
export class UtilityService {

    constructor() { }

    createDateString(dateString: string, timeString: string) {
    return new Date(`${dateString}T${timeString}Z`);
    }

    getTimeFromDate(date: Date) {
    let hours = date.getUTCHours().toString();
    let minutes = date.getUTCMinutes().toString();
    
    if (date.getUTCHours() < 10) {
        hours = `0${hours}`;
    }

    if (date.getUTCMinutes() < 10) {
        minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
    }

    getDateFromDate(date: Date) {
    return date.toJSON().slice(0, 10);
    }
}

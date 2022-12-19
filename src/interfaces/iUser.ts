import { Ride } from './iRide';

export interface User {
    ra: string;
    password: string;
    active: boolean;
    name: string;
    stars: number;
    rides: Ride[];
}

export interface Login {
    ra: string;
    password: string;
}

export interface Logoff {
    ra: string;
}

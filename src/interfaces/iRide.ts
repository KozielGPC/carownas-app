import { User } from './iUser';

export interface Ride {
    id: number;
    rider_ra: string;
    from: string;
    to: string;
    time_start: string;
    time_end: string;
    total_spots: number;
    filled_spots: number;
    passagers: User[];
    rider: User;
}

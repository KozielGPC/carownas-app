import { Ride } from '../interfaces/iRide';
import api from '../providers';

const getall = () => api.get<Ride[]>('/car-rides');
export const CarRidesService = {
    getall,
};

import { useCallback } from 'react';
import { CarRidesService } from '../services/CarRidesService';

export const useCarRides = () => {
    const getall = useCallback(async () => {
        const { status, data } = await CarRidesService.getall();

        if (status !== 200) throw new Error();
        return data;
    }, []);

    return { getall };
};

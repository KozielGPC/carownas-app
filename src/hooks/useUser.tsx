import { useCallback } from 'react';
import { Login, Logoff, User } from '../interfaces/iUser';
import { UserService } from '../services/UserService';

export const useUser = () => {
    const login = useCallback(async (user: Login) => {
        const { status, data } = await UserService.login(user);

        if (status !== 201) throw new Error();

        return data;
    }, []);

    const logoff = useCallback(async (user: Logoff) => {
        const { status, data } = await UserService.logoff(user);

        if (status !== 200) throw new Error();

        return data;
    }, []);

    const getUser = useCallback(async (ra: string | null) => {
        const { status, data } = await UserService.getUser(ra);

        if (status !== 200) throw new Error();

        return data;
    }, []);

    return {
        login,
        logoff,
        getUser,
    };
};

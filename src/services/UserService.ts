import { Login, Logoff, User } from '../interfaces/iUser';
import api from '../providers';

const getUser = (user_id: string | null) => api.get<User>(`/users/${user_id}`);

const login = (user: Login) => api.post<User>('/users', user);

const logoff = (user: Logoff) => api.patch<User>(`/users`, user);

export const UserService = {
    login,
    logoff,
    getUser,
};

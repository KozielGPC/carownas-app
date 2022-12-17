import { CreateMatch, Match } from '../interfaces/iMatch';
import api from '../providers';

const createMatch = (input: CreateMatch) => api.post<Match>('/match', input);

export const MatchService = {
    createMatch,
};

import { api } from '../index';
import { IMovie } from './types';

export const getMovie = async ({name}: {name: string}) =>  {
    const response = await api.get<IMovie>(`api/v1/omdb`, {params: {t: name}});
    return response.data
}
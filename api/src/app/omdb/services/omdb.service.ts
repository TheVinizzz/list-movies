import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { IQueryParams, IResponseOmdb } from '../interface/omdb.type';

@Injectable()
export class OmdbService {
  constructor(private readonly httpService: HttpService) {}

  async getMovies(query: IQueryParams): Promise<IResponseOmdb> {
    const url = 'https://www.omdbapi.com/?i=tt3896198';
    const config = {
      params: {
        ...query,
        apikey: '531d471f',
      },
    };

    const { data } = await lastValueFrom(this.httpService.get(url, config));
    return data;
  }
}

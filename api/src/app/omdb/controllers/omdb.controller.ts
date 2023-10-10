import { Body, Controller, Get } from '@nestjs/common';
import { OmdbService } from '../services/omdb.service';

@Controller('api/v1/omdb')
export class OmdbController {
  constructor(private readonly omdbService: OmdbService) {}

  @Get()
  async getMovies(@Body() body) {
    return this.omdbService.getMovies(body);
  }
}

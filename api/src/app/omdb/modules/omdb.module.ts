import { Module } from '@nestjs/common';
import { OmdbService } from '../services/omdb.service';
import { HttpModule } from '@nestjs/axios';
import { OmdbController } from '../controllers/omdb.controller';

@Module({
  imports: [HttpModule],
  providers: [OmdbService],
  controllers: [OmdbController],
})
export class OmdbModule {}

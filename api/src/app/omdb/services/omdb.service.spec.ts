import { HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { OmdbService } from './omdb.service';

describe('OmdbService', () => {
  let omdbService: OmdbService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        OmdbService,
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();

    omdbService = module.get<OmdbService>(OmdbService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(omdbService).toBeDefined();
    expect(httpService).toBeDefined();
  });
});

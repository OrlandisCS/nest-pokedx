import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { PokeResponse, Result } from './interfaces/poke-response.interface';

@Injectable()
export class SeedService {
  async executeSeed() {
    const { data } = await axios.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=5',
    );

    data.results.forEach(({ name, url }: Result) => {
      const segments = url.split('/');
      const no: number = +segments[segments.length - 2];
      return { name, no };
    });
    return data.results;
  }
}

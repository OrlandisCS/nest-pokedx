import { Injectable } from '@nestjs/common';
import { PokeResponse, Result } from './interfaces/poke-response.interface';
import { Model } from 'mongoose';
import { Pokemon } from 'src/pokemon/entities/pokemon.entity';
import { InjectModel } from '@nestjs/mongoose';
import { AxiosAdapter } from 'src/common/adapters/axios.adapter';

@Injectable()
export class SeedService {
  constructor(
    @InjectModel(Pokemon.name)
    private readonly pokemonModel: Model<Pokemon>,
    private readonly http: AxiosAdapter,
  ) {}
  async executeSeed() {
    await this.pokemonModel.deleteMany();
    const data = await this.http.get<PokeResponse>(
      'https://pokeapi.co/api/v2/pokemon?limit=1500',
    );

    const pokemons: { name: string; no: number }[] = [];

    data.results.forEach((data) => {
      const pokemon = this.createPokemon(data);
      pokemons.push(pokemon);
    });
    const results = await this.pokemonModel.insertMany(pokemons);
    return { message: 'Seed Executed', count: results.length };
  }
  createPokemon(data: Result) {
    const { name, url } = data;
    const segments = url.split('/');
    const no: number = +segments[segments.length - 2];

    return { name, no };
  }
}

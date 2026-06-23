import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { Pokemon } from '../../pokemons/interfaces/pokemon.interface';
import { PokemonService } from '../../pokemons/services/pokemons';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemon-page',
  imports: [],
  templateUrl: './pokemon-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonPage implements OnInit {
  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  public pokemon = signal<Pokemon | null>(null);
  private title = inject(Title);
  private meta = inject(Meta);

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (!id) return;
    this.pokemonService.loadPokemon(id)
      .pipe(
        tap(({ name, id }) => {
          const pageTitle = `#${id} - ${name}`;
          const pageDescription = `Página del Pokémon  ${name}`;
          this.title.setTitle(pageTitle);
          this.meta.updateTag({ name: 'og:title', content: pageDescription })
          this.meta.updateTag({ name: 'og:description', content: pageDescription })
          this.meta.updateTag({
            name: 'og:image', content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id
              }.png`
          })
        })
      )
      .subscribe(this.pokemon.set);
  }
}

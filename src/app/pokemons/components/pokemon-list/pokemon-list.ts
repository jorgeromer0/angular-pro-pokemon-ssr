import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card';
import { SimplePokemon } from '../../interfaces';

@Component({
    selector: 'pokemon-list',
    imports: [PokemonCardComponent],
    templateUrl: './pokemon-list.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListComponent {
  public pokemons = input.required<SimplePokemon[]>();
}

import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { PokemonListComponent } from "../../pokemons/components/pokemon-list/pokemon-list";
import { PokemonListSkeleton } from './ui/pokemon-list-skeleton/pokemon-list-skeleton';
import { PokemonService } from '../../pokemons/services/pokemons';
import { SimplePokemon } from '../../pokemons/interfaces';
import { ActivatedRoute, Router } from '@angular/router';


import { toSignal } from '@angular/core/rxjs-interop'
import { map } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'pokemons-page',
  imports: [PokemonListComponent, PokemonListSkeleton],
  standalone: true,
  templateUrl: './pokemons-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PokemonsPage implements OnInit {
  private pokemonService = inject(PokemonService);

  public pokemons = signal<SimplePokemon[]>([]);
  private router = inject(Router);

  private route = inject(ActivatedRoute)
  private title = inject(Title);


  public currentPage = toSignal<number>(
    this.route.queryParamMap.pipe(
      map(params => params.get('page') ?? '1'),
      map(page => (isNaN(+page) ? 1 : +page)),
      map(page => Math.max(1,page))
    ));

  public isLoading = signal(true);



ngOnInit(): void {
  this.route.queryParamMap.subscribe(() => {
    const page = this.currentPage() ?? 1;
    this.isLoading.set(true);
    this.pokemonService.loadPage(page).subscribe({
      next: (pokemons) => {
        this.pokemons.set(pokemons);
        this.isLoading.set(false);
        this.title.setTitle(`Pokemon SSR - Page ${page}`)
      },
      error: (error) => {
        console.error('Error loading pokemons:', error);
        this.isLoading.set(false);
      }
    });
  });
}


public loadPokemons(page: number = 1): void {
  this.router.navigate([], {
    relativeTo: this.route,
    queryParams: { page },
    queryParamsHandling: 'merge'
  });
}


  public loadPreviousPage(): void {
    const prevPage = (this.currentPage() ?? 1) - 1;
    if (prevPage >= 1) {
      this.loadPokemons(prevPage);
    }
  }

  public loadNextPage(): void {
   this.loadPokemons((this.currentPage() ?? 1) + 1);
  }
}

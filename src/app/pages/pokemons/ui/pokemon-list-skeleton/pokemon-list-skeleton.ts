import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pokemon-list-skeleton',
    imports: [],
    templateUrl: './pokemon-list-skeleton.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokemonListSkeleton {}

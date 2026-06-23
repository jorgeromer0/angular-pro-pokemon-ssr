import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'page-about',
  imports: [],
  templateUrl: './about-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AboutPage implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)

    ngOnInit(): void {
    this.title.setTitle('About Page')
    this.meta.updateTag({name: 'description', content: 'Este es mi About Page'});
    this.meta.updateTag({name: 'og:title', content: 'About Page'});
    this.meta.updateTag({name: 'keyboards', content: 'Hola,Mundo,Ferranado,Herrera,Angular,PRO'});
  }
}

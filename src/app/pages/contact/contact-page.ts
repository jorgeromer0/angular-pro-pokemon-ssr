import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
 selector: 'page-contact',
  imports: [],
  templateUrl: './contact-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class ContactPage  implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)

    ngOnInit(): void {
    this.title.setTitle('Conctact Page')
    this.meta.updateTag({name: 'descripcion', content: 'Este es mi Conctact Page'});
    this.meta.updateTag({name: 'og:title', content: 'About Page'});
    this.meta.updateTag({name: 'keyboard', content: 'Hola,Mundo,Ferranado,Herrera,Angular,PRO'});
  }
}

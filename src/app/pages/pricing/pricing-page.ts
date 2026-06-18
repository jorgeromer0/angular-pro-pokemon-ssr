import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
 selector: 'page-pricing',
  imports: [],
  templateUrl: './pricing-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PricingPage implements OnInit {

  private title = inject(Title)
  private meta = inject(Meta)
  private platform = inject(PLATFORM_ID)

    ngOnInit(): void {
    //  if (isPlatformBrowser(this.platform)) {
    //   document.title = 'Pricing Page'
    //  }

    this.title.setTitle('Pricing Page')
    this.meta.updateTag({name: 'descripcion', content: 'Este es mi Conctact Page'});
    this.meta.updateTag({name: 'og:title', content: 'Pricing Page'});
    }
  }

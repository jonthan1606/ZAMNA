import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(
    public titleService: Title,
    public meta: Meta,
  ) { }

  async ngOnInit() {
    this.titleService.setTitle('Zamna13 | Innovación Tecnológica');
    this.meta.updateTag({ property: 'og:image', content: 'https://zamna13.com/logos/logo-black.jpg' });
    this.meta.updateTag({ name: 'description', content: "Zamna13 es una empresa de innovación tecnológica que se dedica a la creación de soluciones tecnológicas para empresas y emprendedores." });
  }
}

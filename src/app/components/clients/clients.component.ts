import { Component } from '@angular/core';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  public images: string[] = [
    '/assets/images/clients/logo1.png',
    '/assets/images/clients/logo2.png',
    '/assets/images/clients/logo3.png',
    '/assets/images/clients/logo4.png',
  ]

  swiperConfig: any = {
    allowTouchMove: true,
    navigation: true,
    autoPlay: true,
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
      991: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
    },
  };

  constructor() { }

  ngOnInit(): void {
  }

}

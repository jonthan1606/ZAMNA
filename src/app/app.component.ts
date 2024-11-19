import { Component } from '@angular/core';

import SwiperCore, { Autoplay, Pagination, Navigation, EffectFade } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation, EffectFade]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TulumMayaTransfer';
}

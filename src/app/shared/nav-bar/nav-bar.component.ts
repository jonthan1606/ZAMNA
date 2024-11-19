import { Component, Inject, OnInit, PLATFORM_ID, Renderer2, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {



  private scrollListener: boolean = true;
  public menu: boolean = false;
  public isPageService: boolean = false;
  public scrollFlag: string = '';
  public url: string = '';
  public paddingScrollHeader = '';

  public activeLang = 'es';

  constructor(
    private renderer: Renderer2,
    private router: Router,

    @Inject(PLATFORM_ID) private platformId: any,
  ) {


  }

  ngOnInit(): void {
    this.scrollListener = true;
    this.renderer.listen('window', 'scroll', (e) => {
      if (this.scrollListener) {
        this.scrollFlag =
          e.target.scrollingElement.scrollTop > 75 ? 'scroll' : '';
        this.paddingScrollHeader = '0px';
      }
    });
  }

  goTo(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop - 100;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }

  goToCouncil(path: any, event?: any) {
    if (isPlatformBrowser(this.platformId)) {
      setTimeout(() => {
        let element = document.querySelector('#' + path) as HTMLElement;
        let topOfElement = element.offsetTop + 800;
        window.scroll({ top: topOfElement, behavior: 'smooth' });
      }, 200);
    }
  }





}

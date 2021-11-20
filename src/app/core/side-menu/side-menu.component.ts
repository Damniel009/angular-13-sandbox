import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  items: MenuItem[];
  constructor(private translate: TranslateService) {
    this.items = [
      {
        label: 'Home',
        items: [
          {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            routerLink: ['/home'],
          },
          {
            label: 'Orders',
            icon: 'pi pi-fw pi-inbox',
            routerLink: ['/orders'],
          },
          {
            label: 'Analytics',
            icon: 'pi pi-fw pi-chart-line',
            routerLink: ['/analytics'],
          },
          { label: 'Maps', icon: 'pi pi-fw pi-map', routerLink: ['/map'] },
        ],
      },
    ];
  }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  ngOnInit(): void {}
}

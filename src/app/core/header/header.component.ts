import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  items: MenuItem[];
  userItems: MenuItem[];

  constructor(private translate: TranslateService) {
    this.items = [
      {
        label: 'Buy',
        routerLink: ['/home'],
      },
      {
        label: 'Sell',
        routerLink: ['/orders'],
      },
      {
        label: 'Company',
        routerLink: ['/analytics'],
      },
      {
        label: 'Help',
        routerLink: ['/analytics'],
      },
    ];

    this.userItems = [
      {
        label: 'My current bid/offer',
        routerLink: ['/home'],
      },
      {
        separator: true,
      },
      {
        label: 'Profile',
        routerLink: ['/orders'],
      },
      {
        label: 'Messages',
        routerLink: ['/analytics'],
      },
      {
        label: 'Notifications',
        routerLink: ['/analytics'],
      },
      {
        label: 'Favorites',
        routerLink: ['/analytics'],
      },
      {
        label: 'Payment informations',
        routerLink: ['/analytics'],
      },
      {
        label: 'Log out',
        routerLink: ['/analytics'],
      },
    ];
  }

  ngOnInit(): void {}

  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}

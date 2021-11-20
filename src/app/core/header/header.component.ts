import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalLoginComponent } from 'src/app/shared/dialog-components/modal-login/modal-login.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  items: MenuItem[];
  userItems: MenuItem[];

  constructor(private dialogService: DialogService) {
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

  openLoginDialog() {
    const ref = this.dialogService.open(ModalLoginComponent, {
      header: 'Choose a Car',
      showHeader: false,
      width: '45%',
    });

    ref.onClose.subscribe(() => {
      this.isLoggedIn = !this.isLoggedIn;
    });
  }
}

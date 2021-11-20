import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {
  // items: MenuItem[];
  constructor(private translate: TranslateService) {

  }

  changeLanguage(lang: string) {
    this.translate.setDefaultLang(lang);
  }

  ngOnInit(): void {}
}

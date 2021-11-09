import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent implements OnInit {

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ro-RO');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ro-RO');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }

  ngOnInit(): void {}
}

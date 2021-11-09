import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular13';
  param = { value: 'world' };

  constructor(private translate: TranslateService) {
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('ro-RO');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('ro-RO');
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
  }
}

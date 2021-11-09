import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cities: City[];

  selectedCity: City = {
    name: 'English',
    code: 'en-US',
  };

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en-US');
    this.cities = [
      { name: 'English', code: 'en-US' },
      { name: 'Hungarian', code: 'hu-HU' },
      { name: 'Romanian', code: 'ro-RO' },
    ];
  }

  ngOnInit(): void {}

  switchLanguage(event: any): void {
    // console.log(event.value.code);
    this.translate.use(event.value.code);
  }
}

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { registerLocaleData } from '@angular/common';

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import localeEn from '@angular/common/locales/en';
import localeHu from '@angular/common/locales/hu';
import localeRo from '@angular/common/locales/ro';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';

import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { HeaderComponent } from './core/header/header.component';
import { SharedModule } from './shared/shared.module';

registerLocaleData(localeEn, localeHu, localeRo);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SharedModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
    ButtonModule,
    DropdownModule,
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {}

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

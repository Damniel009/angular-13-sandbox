import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';

import localeEn from '@angular/common/locales/en';
import localeHu from '@angular/common/locales/hu';
import localeRo from '@angular/common/locales/ro';

import { ButtonModule } from 'primeng/button';
import { BreadcrumbComponent } from './core/breadcrumb/breadcrumb.component';
// import { HomeComponent } from './lazy-loaded/home/home.component';

registerLocaleData(localeEn, localeHu, localeRo);

@NgModule({
  declarations: [AppComponent, BreadcrumbComponent],
  imports: [
    BrowserModule,
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
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {}

export function translateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

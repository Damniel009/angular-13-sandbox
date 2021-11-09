import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateLoaderFactory } from '../app.module';

//Components
import { BreadcrumbComponent } from '../core/breadcrumb/breadcrumb.component';
import { HeaderComponent } from '../core/header/header.component';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbComponent],
  imports: [
    FormsModule,
    ButtonModule,
    CommonModule,
    MenuModule,
    OverlayPanelModule,
    DropdownModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [],
  exports: [HeaderComponent, BreadcrumbComponent, TranslateModule],
})
export class SharedModule {}

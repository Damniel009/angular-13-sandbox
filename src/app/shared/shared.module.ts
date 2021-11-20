import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { translateLoaderFactory } from '../app.module';

//Components
import { BreadcrumbComponent } from '../core/breadcrumb/breadcrumb.component';
import { HeaderComponent } from '../core/header/header.component';

//Dialog components


//PrimeNG
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ConfirmDialogModule } from 'primeng/confirmdialog';

//PrimeNG services
import { ConfirmationService } from 'primeng/api';

@NgModule({
  declarations: [HeaderComponent, BreadcrumbComponent],
  imports: [
    FormsModule,
    ButtonModule,
    CommonModule,
    MenuModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    DropdownModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ConfirmationService],
  exports: [HeaderComponent, BreadcrumbComponent, TranslateModule, ConfirmDialogModule],
})
export class SharedModule {}

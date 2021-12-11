import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { InputTextModule } from 'primeng/inputtext';

//PrimeNG services
import { ConfirmationService } from 'primeng/api';
import { ModalLoginComponent } from './dialog-components/modal-login/modal-login.component';
import { DialogService } from 'primeng/dynamicdialog';
import { ModalHeaderComponent } from './dialog-components/modal-header/modal-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BreadcrumbComponent,
    ModalLoginComponent,
    ModalHeaderComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    CommonModule,
    MenuModule,
    OverlayPanelModule,
    ConfirmDialogModule,
    DropdownModule,
    InputTextModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [ConfirmationService, DialogService],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    HeaderComponent,
    BreadcrumbComponent,
    InputTextModule,
    TranslateModule,
    ConfirmDialogModule,
  ],
})
export class SharedModule {}

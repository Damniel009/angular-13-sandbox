import { Injectable, OnDestroy } from '@angular/core';
import {
  DialogService,
  DynamicDialogConfig,
  DynamicDialogRef,
} from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class DynamicDialogService implements OnDestroy {
  ref: DynamicDialogRef = new DynamicDialogRef();
  constructor(private dialogService: DialogService) {}

  open(component: any, config: DynamicDialogConfig) {
    this.ref = this.dialogService.open(component, {
      showHeader: false,
      contentStyle: {
        padding: '0',
        borderRadius: '6px'
      },
      ...config,
    });
    return this.ref;
  }

  ngOnDestroy(): void {
    if (this.ref) {
      this.ref.close();
    }
  }
}

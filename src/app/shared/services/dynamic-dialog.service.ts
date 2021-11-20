import { Injectable } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root',
})
export class DynamicDialogService {
  constructor(public dialogService: DialogService) {}
}

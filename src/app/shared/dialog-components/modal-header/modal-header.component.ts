import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-header',
  templateUrl: './modal-header.component.html',
  styleUrls: ['./modal-header.component.scss'],
})
export class ModalHeaderComponent implements OnInit {
  @Input() title: string | undefined = 'Modal Header';
  @Output() onClose: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  closeDialog() {
    this.onClose.emit(true);
  }
}

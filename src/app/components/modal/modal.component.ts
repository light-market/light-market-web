import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() message: string;
  @Output() confirmed = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  onConfirmAction() {
    this.confirmed.emit();
  }

}

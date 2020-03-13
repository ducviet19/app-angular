import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() class: string;
  @Input() name: string;
  @Output() click: EventEmitter<any>;

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.click.emit(event);
  }
}

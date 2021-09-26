import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css'],
})
export class CustomButtonComponent implements OnInit {
  @Input() text: string | undefined;
  @Output() btnClicked = new EventEmitter();

  onClick() {
    this.btnClicked.emit();
  }

  constructor(private toastr: ToastrService) {}
  ngOnInit(): void {}
}

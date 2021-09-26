import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}
  showInfo(message: string, title: string) {
    this.toastr.info(message, title);
  }
}

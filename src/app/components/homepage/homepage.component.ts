import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  title = 'Component Interaction';
  constructor(private notice: NotificationService) {}

  ngOnInit(): void {
    // this.notice.showInfo('Button is clicked', 'Welcome');
  }

  showBtnInfo(btn: any) {
    console.log('a', btn);
    this.notice.showInfo(`${btn.text} is clicked`, 'Hello');
  }

  logInput(int: Element) {
    console.log('b', int);
  }
}

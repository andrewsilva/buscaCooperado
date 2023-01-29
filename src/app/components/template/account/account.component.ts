import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: 'account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  width = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: UIEvent) {
    this.width = (event.target as Window).innerWidth;
  }
}

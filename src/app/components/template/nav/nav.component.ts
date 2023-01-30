import { Component, HostListener, Input } from '@angular/core';
import { handleResize } from 'src/app/shared/utils/resize-win';

interface INavLinks {
  fontSet: string;
  icon: string;
  text: string;
  current: boolean;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass', '../../../../assets/font-icons.css']
})
export class NavComponent {
  @Input() expand: boolean = false;
  width!: number;

  @HostListener('window:resize')
  onResize() {
    this.width = handleResize().width;
  }
}

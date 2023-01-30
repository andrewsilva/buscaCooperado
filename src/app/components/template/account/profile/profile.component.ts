import { Component, Input } from '@angular/core';
import { handleResize } from 'src/app/shared/utils/resize-win';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() expanded!: boolean;

  width!: number;
  constructor() {}

  ngOnInit(): void {
    this.width = handleResize().width;
  }

  ngDoCheck() {
    this.width = handleResize().width;
  }


  setClasses() {
    return {
      'avatar': true,
      'light': this.width < 730,
      'expand': this.expanded
    };
  }


}

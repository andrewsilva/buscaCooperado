import { Component, OnInit } from '@angular/core';
import { handleResize } from '../../../../shared/utils/resize-win';

@Component({
  selector: 'app-button',
  templateUrl: 'button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    window.addEventListener('resize', handleResize);
  }
}

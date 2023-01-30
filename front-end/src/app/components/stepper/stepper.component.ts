import { Component } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {
  progress: number = 0;
  steps = [
    {
      title: 'Início',
      current: true,
      completed: false,
      progress: 0,
    },
    {
      title: 'Documentos',
      current: false,
      completed: false,
      progress: 4 / 3,
    },
    {
      title: 'Dados cadsatrais',
      current: false,
      completed: false,
      progress: (4 / 3) * 2,
    },
    {
      title: 'Admissão',
      current: false,
      completed: false,
      progress: 4,
    },
  ];

  ngOnInit() {
    this.progress = this.steps.find(step => step.current)?.progress || 0;
  }
}

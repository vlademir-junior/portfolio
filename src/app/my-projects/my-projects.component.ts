// projects.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-projects',
  templateUrl: './my-projects.component.html',
  styleUrls: ['./my-projects.component.scss']
})
export class MyProjectsComponent {
  placeholderProjects = [
    {
      title: 'Placeholder Project 1',
      description: 'This is a placeholder project description.',
    },
    {
      title: 'Placeholder Project 2',
      description: 'This is another placeholder project description.',
    },
    {
      title: 'Placeholder Project 3',
      description: 'This is another placeholder project description.',
    },
    // Add more placeholder projects as needed
  ];
}

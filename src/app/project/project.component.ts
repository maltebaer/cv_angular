import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() project: any;
  @Input() index: any;
  @Input() projectsLength: any;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../shared/project';
import { LIST_OF_PROJECTS } from '../mock/projects';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  name: string = "";
  project!: Project | null;

  constructor(private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.name = this.router.snapshot.paramMap.get('name') || "";
    console.warn({
      name: this.name,
    })
    if (this.name) {
      const find =
        LIST_OF_PROJECTS.find((project) => project.url === this.name);
      
      console.warn({
        find,
      })
      
      if (find) {
        this.project = find;
      } else {
        //404
      }
    }
  }
}

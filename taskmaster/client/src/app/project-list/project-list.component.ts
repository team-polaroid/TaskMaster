import { Component, OnInit } from '@angular/core';
import { ProjectService} from "../shared/project/project.service";
import { Project} from "../shared/model/project";
import {Observable} from "rxjs";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Observable<Project[]>;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.projectService.getAll().subscribe(data => {
      this.projects = data;
    })
  }

}

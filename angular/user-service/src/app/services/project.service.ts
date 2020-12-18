import { Injectable } from '@angular/core';
import { Project } from '../entities/Project';
import { masterProjects } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects:Project[] = masterProjects;
  constructor() { }

  getProjects():Project[]{
    return this.projects;
  }
  addProject(prj:Project):Project[]{
    this.projects.push(prj);
    return this.projects;
  }
}

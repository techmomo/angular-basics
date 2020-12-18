import { Injectable } from '@angular/core';
import { Project } from '../data/Project';
import { projects } from '../data/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects:Project[] = projects;
  constructor() { }

  getProjects():Project[]{
    return this.projects;
  }
  addProject(prj:Project):Project[]{
    this.projects.push(prj);
    return this.projects;
  }
}

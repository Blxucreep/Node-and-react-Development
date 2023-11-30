import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { UserSettingsService } from "../user-settings.service";
import { LessonPackage } from '../app.component';

@Component({
  selector: 'app-lesson-edit-form',
  templateUrl: './lesson-edit-form.component.html',
  styleUrls: ['./lesson-edit-form.component.css']
})
export class LessonEditFormComponent {
  constructor(private router: Router, private userSettingsService: UserSettingsService) {

  }

  model: LessonPackage = { title: '', description: '', category: '', level: 1, prerequisite: [], tags: [], copyright: ''};
  
  onClickSubmit() {
    console.log('form values to save to server', this.model);
  }
}
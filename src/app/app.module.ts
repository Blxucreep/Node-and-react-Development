import { FormsModule } from '@angular/forms';
import { ChipsModule } from 'primeng/chips';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LessonEditFormComponent } from './lesson-edit-form/lesson-edit-form.component';
import { LessonSearchPageComponent } from './lesson-search-page/lesson-search-page.component';
import { MenuNavBarComponent } from './menu-nav-bar/menu-nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LessonEditFormComponent,
    LessonSearchPageComponent,
    MenuNavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    FormsModule,
 ChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

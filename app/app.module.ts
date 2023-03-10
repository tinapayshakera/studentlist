import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FourthComponent } from './fourth/fourth.component';
import { ThirdComponent } from './third/third.component';
import { SecondComponent } from './second/second.component';
import { FirstComponent } from './first/first.component';
import { StudentComponent } from './student/student.component';
import { AddComponent } from './add/add.component';
import { SubtractComponent } from './subtract/subtract.component';
import { AddStudentComponent } from './add-student/add-student.component';
// import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    FourthComponent,
    ThirdComponent,
    SecondComponent,
    FirstComponent,
    StudentComponent,
    AddComponent,
    SubtractComponent,
    AddStudentComponent,
    // TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

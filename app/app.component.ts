import { Component } from '@angular/core';
import { Student } from './student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Specialization1';
  isAddStudent = false;
  studentsList: Student[] = [
    {
      id: 0,
      firstName: "Richel",
      lastName: "Bacayan",
      age: 21,
      gender: "Female",
      nationality: "Filipino",
      homeaddress: "Cebu City",
      status: "Single",
      title: "Educational Background",
      elementaryschool: "Cebu Elementary School",
      highschool: "Sisters of Mary Girls Town ",
      college: "University of San Carlos",
      degree:"Software Developer"
    },
    {
      id: 1,
      firstName: "Wrange",
      lastName: "Paerson",
      age: 22,
      gender: "Male",
      nationality: "American",
      homeaddress: "Manila",
      status: "Married",
      title: "Educational Background",
      elementaryschool: "St. Louise Elementary School",
      highschool: "St. Martin National High School"
    },
    {
      id: 2,
      firstName: "Maxwell",
      lastName: "Del Valle",
      age: 23,
      gender: "Male",
      nationality: "Half-Filipino",
      homeaddress: "Manila",
      status: "Single",
      title: "Educational Background",
      elementaryschool: "UP Integrated School",
      highschool: "Xavier School Quezon City",
      college: "University of Philippines",
      degree:"Doctor"
    },

  ]
  addStudent(student: Student){
    // console.log(student);
    this.studentsList.push(student);
    this.isAddStudent = false;
  }

  addNewStudent(){
    this.isAddStudent = true;
  }
}





// import { Component, Output, EventEmitter } from '@angular/core';
// import { FormControl, FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-task',
//   templateUrl: './task.component.html',
//   styleUrls: ['./task.component.css']
// })
// export class TaskComponent {
//   ngOnInit(){
//     this.taskForm.reset();

//   }
//   @Output() taskOut = new EventEmitter();
//   taskForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//     age: new FormControl(0),
//     gender: new FormControl(''),
//     nationality: new FormControl(''),
//     degree: new FormControl('')

//   })

//   addTask(){
//     // console.log(this.studentForm.value)
//     this.taskOut.emit(this.taskForm.value)
//     // this.studentForm.reset();
//   }
// }

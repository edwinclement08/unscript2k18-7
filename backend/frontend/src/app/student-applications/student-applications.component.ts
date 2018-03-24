import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-applications',
  templateUrl: './student-applications.component.html',
  styleUrls: ['./student-applications.component.css']
})
export class StudentApplicationsComponent implements OnInit {
  studentList = [
    {
      name:"Joshua Noronha",
      resume:"https://www.linkedin.com/company/morgan-stanley/",
      isSelected:true
    },
    {
      name:"Joshua Noronha",
      resume:"https://www.linkedin.com/company/morgan-stanley/",
      isSelected:true
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

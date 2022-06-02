import { Component, OnInit } from '@angular/core';
import { ClsEmployee } from './cls-employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  EmployeeList : ClsEmployee[] = 
  [
      new ClsEmployee("E101", "Alexandar",6000, "SDE1", 3),
      new ClsEmployee("E102", "Anand",10000, "SDE3", 6),
      new ClsEmployee("E103", "Thomas",7000, "SDE1", 4),
      new ClsEmployee("M102", "Cole",12000, "Manager", 7),
      new ClsEmployee("E104", "Yong",9000, "SDE2", 5),
      new ClsEmployee("E105", "Smith",6000, "SDE1", 3),
      new ClsEmployee("T101", "Bob",7000, "Testing", 4),
      new ClsEmployee("H101", "Boyd",4000, "HR", 2),
      new ClsEmployee("N101", "Gates",6000, "Network Engineer", 4),
      new ClsEmployee("E106", "Harris",8000, "SDE2", 4),
      new ClsEmployee("E107", "Allen",11000, "SDE3", 7)
  ]

  ngOnInit(): void {
  }

}

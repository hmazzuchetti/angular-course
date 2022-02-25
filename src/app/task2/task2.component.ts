import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  username = '';
  // canCreateUsername = "You can't create a new username because username is empty!";
  // allowNewUser = false;

  constructor() {  }

  ngOnInit(): void {
  }

  onResetUser(){
    this.username = '';
    
  }



}

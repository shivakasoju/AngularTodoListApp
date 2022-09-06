import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {


  errorMessage = 'An Error Occured! Please Contact The Support Team At Cantilever Lab' 

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  thought = {
    id: '1',
    content: 'Aprendendo Angular',
    authorship: 'Eva',
    model: 'model1'
  }

  constructor() { }

  ngOnInit(): void {
  }

}

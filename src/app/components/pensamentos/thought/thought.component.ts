import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thought',
  templateUrl: './thought.component.html',
  styleUrls: ['./thought.component.css']
})
export class ThoughtComponent implements OnInit {

  @Input() thought = {
    content: 'Aprendendo Angular',
    authorship: 'Eva',
    model: 'model1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  widthThought(): string {
    if (this.thought.content.length >= 256) {
      return 'thought-g'
    } else {
      return 'thought-p'
    }
  }

}

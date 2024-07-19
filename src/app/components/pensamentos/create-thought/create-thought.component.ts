import { Component, OnInit } from '@angular/core';
import { IThought } from '../thought.interface';
import { ThoughtService } from '../thought/thought-service/thought-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-thought',
  templateUrl: './create-thought.component.html',
  styleUrls: ['./create-thought.component.css']
})
export class CreateThoughtComponent implements OnInit {

  thought: IThought= {
    content: '',
    authorship: '',
    model: 'model1'
  }

  constructor(private service: ThoughtService, private router: Router) { }

  ngOnInit(): void {
  }

  createThought() {
    this.service.create(this.thought).subscribe(()=> {
      this.router.navigate(['/listThought']);
    })

  }

  cancelThought() {
    this.router.navigate(['/listThought']);
  }

}

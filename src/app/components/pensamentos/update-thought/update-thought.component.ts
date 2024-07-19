import { Component, OnInit } from '@angular/core';
import { IThought } from '../thought.interface';
import { ThoughtService } from '../thought/thought-service/thought-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-thought',
  templateUrl: './update-thought.component.html',
  styleUrls: ['./update-thought.component.css']
})
export class UpdateThoughtComponent implements OnInit {
  thought: IThought = {
    id:0,
    content: '',
    authorship: '',
    model: ''
  }

  constructor(private service: ThoughtService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.service.getById(parseInt(id!)).subscribe((thought) => {
      this.thought = thought
    });
  }

  updateThought(){
    this.service.update(this.thought).subscribe(()=> {
      this.router.navigate(['/listThought']);
    })
  }

  cancelThought(){
    this.router.navigate(['/listThought']);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-thought',
  templateUrl: './list-thought.component.html',
  styleUrls: ['./list-thought.component.css']
})
export class ListThoughtComponent implements OnInit {
  thoughtList = [
    {
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam assumenda aperiam hic iusto nesciunt. Fuga, error provident cupiditate iusto consequatur, cum voluptatibus veniam temporibus corrupti libero nam quod vero ratione.',
      authorship: 'Dev',
      model: 'model1'
    },
    {
      content: 'Passo informações para o componente filho',
      authorship: 'Componente pai',
      model: 'model2'
    },
    {
      content: 'Minha propriedade é decorada com o @Input() angular-cor',
      authorship: 'Componente Filho',
      model: 'model3'
    }

  ];
  constructor() { }

  ngOnInit(): void {
  }

}

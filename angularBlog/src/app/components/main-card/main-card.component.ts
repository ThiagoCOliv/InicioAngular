import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit
{
  ngOnInit(): void 
  {
    
  }

  @Input()
  photo: string = "";

  @Input()
  title: string = "Titulo do Post";

  @Input()
  description: string = "Descricao do Post";

  constructor(){}
}

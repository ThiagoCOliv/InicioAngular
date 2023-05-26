import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'secondary-card',
  templateUrl: './secondary-card.component.html',
  styleUrls: ['./secondary-card.component.css']
})
export class SecondaryCardComponent implements OnInit{
  ngOnInit(): void {
  }

  constructor(){}

  @Input()
  photo: string = "";

  @Input()
  title: string = "";

  @Input()
  description: string = "";
}

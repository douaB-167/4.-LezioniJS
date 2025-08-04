import { Component, Input } from '@angular/core';
import { Pizzeria } from '../pizzeria/pizzeria.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  // @Input() id!: string;
  // @Input() nome!: string;
  // @Input() imgURL!: string;

  @Input() dati!: string[];
}

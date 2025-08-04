import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pizzeria } from './pizzeria/pizzeria.model';
import { PIZZERIA_DB } from './PIZZERIA_DB';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  miePizze: Pizzeria[] = PIZZERIA_DB;
}

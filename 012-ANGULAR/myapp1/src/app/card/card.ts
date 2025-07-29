import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {
  // nomeCard: string = "Card";
  // descrizione: string = "Questa è la prova di una card";
  // imgPath: string = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

  @Input() id!: string; //guarda che questa cosa qua te la passo più tardi
  @Input() nome!: string;
  @Input() cognome!: string;
  @Input() materie!: string[];

}
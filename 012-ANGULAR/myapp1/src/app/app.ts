import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Card } from "./card/card";
import { Studente } from './studente/studente.model';
import { STUDENTI_DB } from './STUDENTI_DB';

@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "Mia Prima App";
  nomeAutore: string = "Doua Boufqir";

  // mieiStudenti = [
  //   {
  //     id: "s1",
  //     nome: "Laura",
  //     cognome: "Verdi",
  //     materie: ["JS", "html", "Java"]
  //   },
  //   {
  //     id: "s2",
  //     nome: "Luca",
  //     cognome: "Rossi",
  //     materie: ["Angular"]
  //   },
  //   {
  //     id: "s3",
  //     nome: "Maria",
  //     cognome: "Gialli",
  //     materie: []
  //   }
  // ]


  mieiStudenti: Studente[] = STUDENTI_DB;
}

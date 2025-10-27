import { Component } from '@angular/core';
import { Header } from "../components/header/header";
import { CardSmall } from "../components/card-small/card-small";
import { InfoCardSmall } from '../components/card-small/models/info-card-small';
import { I } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-dashboard',
  imports: [Header, CardSmall],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  total!: InfoCardSmall;
  end!: InfoCardSmall
  inProgress!: InfoCardSmall;
  late!: InfoCardSmall;

  constructor(){
    this.total = new InfoCardSmall();
    this.total.title = "Total des tâches";
    this.total.statistique = 120;
    this.total.subTitle = "Toutes les tâches enregistrées";

    this.end = new InfoCardSmall();
    this.end.title = "Tâches terminées";
    this.end.statistique = 80;
    this.end.subTitle = "Tâches accomplies avec succès";

    this.inProgress = new InfoCardSmall();
    this.inProgress.title = "Tâches en cours";
    this.inProgress.statistique = 30;
    this.inProgress.subTitle = "Tâches en cours de réalisation";
    
    this.late = new InfoCardSmall();
    this.late.title = "Tâches en retard";
    this.late.statistique = 10;
    this.late.subTitle = "Tâches non terminées à temps";

  }
}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-games',
  imports: [],
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent {
  games = [
    {
      id: 1,
      name: 'Uncharted 3'
    },
    {
      id: 2,
      name: 'Need for Speed'
    },
    {
      id: 3,
      name: 'Prince of Persia'
    }
  ]

}

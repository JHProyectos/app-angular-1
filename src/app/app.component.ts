import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';

@Component({ //Esto es un "decorador" que aplica cosas a la clase AppComponent que está más abajo
  selector: 'app-root', //esto es lo que està en el index.html
  imports: [RouterOutlet, UserComponent], 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-app';
  city = 'Venato Tuerto';
}



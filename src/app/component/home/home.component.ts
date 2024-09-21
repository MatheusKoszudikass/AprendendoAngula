import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
  @if(userName === 'Matheus'){<p>Nome correto e {{userName}}</p>}
  @else{ <p>O nome está incorreto {{userName}}</p>}`,
  styleUrl: './home.component.scss'
})
export class HomeComponent {
   userName = 'Matheus';
}

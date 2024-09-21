import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `@for (item of users; track item.id) {
    <p>{{item.id + item.name}}</p>
  }`,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  users = [{id: 1, name: 'Matheus'}, {id: 2 , name: 'Edna'}, {id: 3 , name: 'João'}]
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  template: `{{userName}}`,
})
export class UserComponent {
    userName = 'Matheus';
}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { FooterComponent } from "./component/footer/footer.component";
import { ImgComponent } from "./component/img/img.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, HomeComponent, FooterComponent, ImgComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
  template: `Hello {{city}}, {{50 + 50}}, 
  <section><app-user/></section> 
  <section><app-home/></section>
  <section><app-footer/></section>
  <section><app-img/></section>`,
  styles: `:host {
     color: #a144eb;
  }`
})
export class AppComponent {
  title = 'ativo-byte';
  city = 'São paulo';
}

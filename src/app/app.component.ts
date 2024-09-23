import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { UserComponent } from './component/user/user.component';
import { FooterComponent } from "./component/footer/footer.component";
import { ImgComponent } from "./component/img/img.component";
import { ChildComponent } from './component/img/child/child.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, HomeComponent, 
    FooterComponent, ImgComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ativo-byte';
  city = 'São paulo';
}

import { Component, Input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { ChildComponent } from "./child/child.component";


@Component({
  selector: 'app-img',
  standalone: true,
  imports: [NgOptimizedImage, ChildComponent],
  templateUrl: './img.component.html',
  styleUrl: './img.component.scss'
})
export class ImgComponent {

  items = new Array<number>();
  stringArray = new Array<string>();

  message: string = '';
  logoUrl: string = '/img/LogoTipo.png';
  logoAlt: string = 'AtivoByte';
  isEditable: boolean = true;

  @Input() theme: string = 'dark';

  onMouseOver() {
    this.message = 'Way to  go 🐂';
    console.log(this.message);
  }

  greet(teste: string) {
    this.isEditable = false;
    console.log(this.isEditable);
    console.log(teste);
  }

  addItem(item: number) {
      this.items.push(item);
      this.items.forEach(item => {
        console.log('Tipo', typeof item);
      })

      this.stringArray = this.items.map(String); 
      this.stringArray.forEach(item => {
        console.log('Tipo', typeof item);
      })

      console.log('item adicionado', item);
  }
}
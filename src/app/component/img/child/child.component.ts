import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent {
 count: number = 0;
 themeEdit: string = 'light';
 name: string = 'dados do componente filho editado';

 @Output() incrementCountEvent = new EventEmitter<number>();

 onClick(){
    this.count++;
    this.incrementCountEvent.emit(this.count);
  }
}

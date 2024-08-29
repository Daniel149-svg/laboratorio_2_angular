import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-propiedades',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.css']
})
export class PropiedadesComponent {


  divColor: string = 'blue';

  onButtonClick() {
    this.divColor = this.divColor === 'blue' ? 'red' : 'blue';
  }
}


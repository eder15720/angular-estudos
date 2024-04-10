import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TesteComponent } from '../teste/teste.component';

@Component({
  selector: 'app-new-component',
  standalone: true,
  imports: [CommonModule, TesteComponent],
  templateUrl: './new-component.component.html',
  styleUrl: './new-component.component.scss'
})
export class NewComponent {
  public name = 'NewComponent';
}

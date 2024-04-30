import { Component, Input, input, signal } from '@angular/core';

function toUpperCase(value: string){
  return value.toUpperCase();
}

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss'
})
export class InputComponent {
  public name = signal("Sem dados")

  @Input({ 
    //alias: "abacaxi", -- é possível inserir um alias
    required: true,
    transform: toUpperCase
   }) set inputName(value: string){
    this.name.set(value);
   }
}

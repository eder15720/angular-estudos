import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { TemaplteControlFlowComponent } from '../../template/temaplte-control-flow/temaplte-control-flow.component';

@Component({
  selector: 'app-signals', 
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss'
})
export class SignalsComponent {
  public firstName = signal("Eder");
  public lastName = signal("Nosso");

  public fullName = computed(() =>{
      return this.firstName() + " " + this.lastName();
  });

  public array = signal([1]);

  constructor(){}

  public updateName(){
    return this.firstName.set("Joao");
  }

  public updateArray(){
    this.array.update((oldValue: Array<number>) =>{
      return [...oldValue, oldValue.length ++]
    })
  }
}

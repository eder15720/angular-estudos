import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-binding',
  standalone: true,
  imports: [NgClass, CommonModule, FormsModule],
  templateUrl: './template-binding.component.html',
  styleUrl: './template-binding.component.scss'
})
export class TemplateBindingComponent {
  public name = 'Dener Troquatte';
  public title = 'teste';
  public age = 30;
  public condition = 1 > this.age ? 'teste false' : 'teste true';
  public isDisabled = true;
  public srcValue = '';

  public isTextDecoration = this.age >= 32 ? 'underline' : 'none';

  public sum() {
    return this.age++;
  }

  public sub() {
    return this.age--;
  }

  public onKeyDown(event: Event) {
    return console.log(event);
  }

  public onMouseEvent(event: any){
    return console.log({
      clietX: event.clietX,
      clietY: event.clietY,
    });
  }

}

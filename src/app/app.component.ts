import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewComponent } from './components/new-component/new-component.component';
import { TesteComponent } from './components/teste/teste.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';
import { TemplateVariablesComponent } from './components/template/template-variables/template-variables.component';
import { TemaplteControlFlowComponent } from './components/template/temaplte-control-flow/temaplte-control-flow.component';
import { TemplateDeferrableViewsComponent } from './components/template/template-deferrable-views/template-deferrable-views.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    NewComponent, 
    TesteComponent, 
    TemplateBindingComponent,
    TemplateVariablesComponent,
    TemaplteControlFlowComponent,
    TemplateDeferrableViewsComponent
  ],
  template: `
    <!--<router-outlet></router-outlet>-->
    <!--<app-temaplte-control-flow>-->

    <h1>Curso de Angular</h1>
    <app-template-deferrable-views />
    
  `,
})
export class AppComponent {
  
}

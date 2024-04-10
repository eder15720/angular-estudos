import { CommonModule, NgIf, NgFor  } from '@angular/common';
import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

@Component({
  selector: 'app-temaplte-control-flow',
  standalone: true,
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './temaplte-control-flow.component.html',
  styleUrl: './temaplte-control-flow.component.scss'
})
export class TemaplteControlFlowComponent {
  public isTrue = true;

  public itens: Array<{name: string }> = [{name: 'Dener '}];
  public loadingData$: Observable<String[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(3000));

  public trackByFn(index: number){
    return index;
  }

}

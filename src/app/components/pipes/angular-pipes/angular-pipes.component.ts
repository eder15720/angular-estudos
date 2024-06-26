import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, UpperCasePipe, registerLocaleData } from '@angular/common';
import { Component, LOCALE_ID, signal } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { delay } from 'rxjs/internal/operators/delay';
import { CustomStringPipe } from '../../../pipes/custom-string.pipe';


@Component({
  selector: 'app-angular-pipes',
  standalone: true,
  imports: [  
    DatePipe, 
    UpperCasePipe, 
    LowerCasePipe, 
    JsonPipe, 
    AsyncPipe, 
    CurrencyPipe, 
    DecimalPipe, 
    PercentPipe,
    CustomStringPipe,
  ],
  templateUrl: './angular-pipes.component.html',
  styleUrl: './angular-pipes.component.scss',
})
export class AngularPipesComponent {
  public date = signal(new Date());
  
  public json = signal([
    { name: 'Henrique Eder'}
  ]
  );

  public loadingData$: Observable<String[]> = of([
    'item 1',
    'item 2',
    'item 3',
  ]).pipe(delay(1000));

}

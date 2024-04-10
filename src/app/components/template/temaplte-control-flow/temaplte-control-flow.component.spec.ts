import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaplteControlFlowComponent } from './temaplte-control-flow.component';

describe('TemaplteControlFlowComponent', () => {
  let component: TemaplteControlFlowComponent;
  let fixture: ComponentFixture<TemaplteControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemaplteControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemaplteControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

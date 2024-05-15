import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgRxComponent } from './ng-rx.component';

describe('NgRxComponent', () => {
  let component: NgRxComponent;
  let fixture: ComponentFixture<NgRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgRxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrayMethodsComponent } from './array-methods.component';

describe('ArrayMethodsComponent', () => {
  let component: ArrayMethodsComponent;
  let fixture: ComponentFixture<ArrayMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrayMethodsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrayMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

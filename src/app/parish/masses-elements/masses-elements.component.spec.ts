import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassesElementsComponent } from './masses-elements.component';

describe('MassesElementsComponent', () => {
  let component: MassesElementsComponent;
  let fixture: ComponentFixture<MassesElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MassesElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MassesElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

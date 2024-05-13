import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestsElementsComponent } from './priests-elements.component';

describe('PriestsElementsComponent', () => {
  let component: PriestsElementsComponent;
  let fixture: ComponentFixture<PriestsElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriestsElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriestsElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

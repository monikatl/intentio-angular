import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacramentElementsComponent } from './sacrament-elements.component';

describe('SacramentElementsComponent', () => {
  let component: SacramentElementsComponent;
  let fixture: ComponentFixture<SacramentElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SacramentElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SacramentElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

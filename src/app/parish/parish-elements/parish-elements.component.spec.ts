import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParishElementsComponent } from './parish-elements.component';

describe('ParishElementsComponent', () => {
  let component: ParishElementsComponent;
  let fixture: ComponentFixture<ParishElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParishElementsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParishElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

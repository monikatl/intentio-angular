import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivingIntentionsComponent } from './arriving-intentions.component';

describe('ArrivingIntentionsComponent', () => {
  let component: ArrivingIntentionsComponent;
  let fixture: ComponentFixture<ArrivingIntentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArrivingIntentionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArrivingIntentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

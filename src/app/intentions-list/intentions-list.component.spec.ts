import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentionsListComponent } from './intentions-list.component';

describe('IntentionsListComponent', () => {
  let component: IntentionsListComponent;
  let fixture: ComponentFixture<IntentionsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntentionsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntentionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

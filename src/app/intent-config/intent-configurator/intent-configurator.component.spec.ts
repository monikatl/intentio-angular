import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntentConfiguratorComponent } from './intent-configurator.component';

describe('IntentConfiguratorComponent', () => {
  let component: IntentConfiguratorComponent;
  let fixture: ComponentFixture<IntentConfiguratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntentConfiguratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IntentConfiguratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

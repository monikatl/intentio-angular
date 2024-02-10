import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriestLoginComponent } from './priest-login.component';

describe('PriestLoginComponent', () => {
  let component: PriestLoginComponent;
  let fixture: ComponentFixture<PriestLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PriestLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PriestLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimarySchoolChoirComponent } from './primary-school-choir.component';

describe('PrimarySchoolChoirComponent', () => {
  let component: PrimarySchoolChoirComponent;
  let fixture: ComponentFixture<PrimarySchoolChoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimarySchoolChoirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimarySchoolChoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

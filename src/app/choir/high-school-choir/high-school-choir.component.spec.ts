import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighSchoolChoirComponent } from './high-school-choir.component';

describe('HighSchoolChoirComponent', () => {
  let component: HighSchoolChoirComponent;
  let fixture: ComponentFixture<HighSchoolChoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HighSchoolChoirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HighSchoolChoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

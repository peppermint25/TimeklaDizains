import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondarySchoolComponent } from './secondary-school.component';

describe('SecondarySchoolComponent', () => {
  let component: SecondarySchoolComponent;
  let fixture: ComponentFixture<SecondarySchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SecondarySchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SecondarySchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

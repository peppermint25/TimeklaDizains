import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirMainComponent } from './choir-main.component';

describe('ChoirMainComponent', () => {
  let component: ChoirMainComponent;
  let fixture: ComponentFixture<ChoirMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoirMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoirMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

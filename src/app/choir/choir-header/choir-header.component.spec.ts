import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoirHeaderComponent } from './choir-header.component';

describe('ChoirHeaderComponent', () => {
  let component: ChoirHeaderComponent;
  let fixture: ComponentFixture<ChoirHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoirHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChoirHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

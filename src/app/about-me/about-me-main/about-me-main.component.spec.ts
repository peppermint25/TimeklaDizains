import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeMainComponent } from './about-me-main.component';

describe('AboutMeMainComponent', () => {
  let component: AboutMeMainComponent;
  let fixture: ComponentFixture<AboutMeMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMeMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutMeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

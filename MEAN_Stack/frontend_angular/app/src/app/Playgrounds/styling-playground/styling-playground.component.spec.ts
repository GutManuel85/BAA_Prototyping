import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylingPlaygroundComponent } from './styling-playground.component';

describe('StylingPlaygroundComponent', () => {
  let component: StylingPlaygroundComponent;
  let fixture: ComponentFixture<StylingPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StylingPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylingPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

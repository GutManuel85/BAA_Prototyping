import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomThemePlaygroundComponent } from './custom-theme-playground.component';

describe('CustomThemePlaygroundComponent', () => {
  let component: CustomThemePlaygroundComponent;
  let fixture: ComponentFixture<CustomThemePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomThemePlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomThemePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

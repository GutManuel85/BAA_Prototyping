import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultCheckComponent } from './result-check.component';

describe('ResultCheckComponent', () => {
  let component: ResultCheckComponent;
  let fixture: ComponentFixture<ResultCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

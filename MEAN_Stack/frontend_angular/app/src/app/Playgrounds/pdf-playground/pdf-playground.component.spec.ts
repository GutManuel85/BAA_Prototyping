import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPlaygroundComponent } from './pdf-playground.component';

describe('PdfPlaygroundComponent', () => {
  let component: PdfPlaygroundComponent;
  let fixture: ComponentFixture<PdfPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

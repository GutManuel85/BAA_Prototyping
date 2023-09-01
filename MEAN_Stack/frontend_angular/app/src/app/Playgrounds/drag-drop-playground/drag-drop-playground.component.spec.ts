import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropPlaygroundComponent } from './drag-drop-playground.component';

describe('DragDropPlaygroundComponent', () => {
  let component: DragDropPlaygroundComponent;
  let fixture: ComponentFixture<DragDropPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DragDropPlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragDropPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

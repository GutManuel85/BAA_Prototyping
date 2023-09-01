import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubePlaygroundComponent } from './youtube-playground.component';

describe('YoutubePlaygroundComponent', () => {
  let component: YoutubePlaygroundComponent;
  let fixture: ComponentFixture<YoutubePlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubePlaygroundComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YoutubePlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

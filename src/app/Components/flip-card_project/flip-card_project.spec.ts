import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipCardProject } from './flip-card_project';

describe('FlipCard', () => {
  let component: FlipCardProject;
  let fixture: ComponentFixture<FlipCardProject>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipCardProject]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipCardProject);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

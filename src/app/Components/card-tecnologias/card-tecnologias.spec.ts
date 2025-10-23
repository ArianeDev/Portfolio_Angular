import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTecnologias } from './card-tecnologias';

describe('CardTecnologias', () => {
  let component: CardTecnologias;
  let fixture: ComponentFixture<CardTecnologias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardTecnologias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardTecnologias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

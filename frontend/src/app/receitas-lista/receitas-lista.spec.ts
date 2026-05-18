import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitasLista } from './receitas-lista';

describe('ReceitasLista', () => {
  let component: ReceitasLista;
  let fixture: ComponentFixture<ReceitasLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitasLista],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceitasLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaCadastro } from './receita-cadastro';

describe('ReceitaCadastro', () => {
  let component: ReceitaCadastro;
  let fixture: ComponentFixture<ReceitaCadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReceitaCadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(ReceitaCadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieProfesseurComponent } from './modifie-professeur.component';

describe('ModifieProfesseurComponent', () => {
  let component: ModifieProfesseurComponent;
  let fixture: ComponentFixture<ModifieProfesseurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieProfesseurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieProfesseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

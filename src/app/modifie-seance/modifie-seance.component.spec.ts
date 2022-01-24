import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieSeanceComponent } from './modifie-seance.component';

describe('ModifieSeanceComponent', () => {
  let component: ModifieSeanceComponent;
  let fixture: ComponentFixture<ModifieSeanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieSeanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieSeanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

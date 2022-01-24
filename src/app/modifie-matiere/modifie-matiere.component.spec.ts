import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieMatiereComponent } from './modifie-matiere.component';

describe('ModifieMatiereComponent', () => {
  let component: ModifieMatiereComponent;
  let fixture: ComponentFixture<ModifieMatiereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieMatiereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

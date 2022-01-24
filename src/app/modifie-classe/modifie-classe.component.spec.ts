import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifieClasseComponent } from './modifie-classe.component';

describe('ModifieClasseComponent', () => {
  let component: ModifieClasseComponent;
  let fixture: ComponentFixture<ModifieClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifieClasseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifieClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

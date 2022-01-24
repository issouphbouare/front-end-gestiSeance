import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeancesPrComponent } from './seances-pr.component';

describe('SeancesPrComponent', () => {
  let component: SeancesPrComponent;
  let fixture: ComponentFixture<SeancesPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeancesPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeancesPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

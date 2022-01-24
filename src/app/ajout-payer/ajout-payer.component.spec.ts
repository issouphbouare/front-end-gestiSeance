import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutPayerComponent } from './ajout-payer.component';

describe('AjoutPayerComponent', () => {
  let component: AjoutPayerComponent;
  let fixture: ComponentFixture<AjoutPayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutPayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutPayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

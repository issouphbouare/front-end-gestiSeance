import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HonorairePrComponent } from './honoraire-pr.component';

describe('HonorairePrComponent', () => {
  let component: HonorairePrComponent;
  let fixture: ComponentFixture<HonorairePrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HonorairePrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HonorairePrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

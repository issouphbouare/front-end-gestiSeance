import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiePayerComponent } from './modie-payer.component';

describe('ModiePayerComponent', () => {
  let component: ModiePayerComponent;
  let fixture: ComponentFixture<ModiePayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiePayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiePayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesPrComponent } from './archives-pr.component';

describe('ArchivesPrComponent', () => {
  let component: ArchivesPrComponent;
  let fixture: ComponentFixture<ArchivesPrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArchivesPrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

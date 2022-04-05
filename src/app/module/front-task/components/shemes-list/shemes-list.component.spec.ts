import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShemesListComponent } from './shemes-list.component';

describe('ShemesListComponent', () => {
  let component: ShemesListComponent;
  let fixture: ComponentFixture<ShemesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShemesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShemesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

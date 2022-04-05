import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSchemeComponent } from './create-scheme.component';

describe('CreateSchemeComponent', () => {
  let component: CreateSchemeComponent;
  let fixture: ComponentFixture<CreateSchemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSchemeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSchemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

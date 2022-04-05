import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontTaskViewComponent } from './front-task-view.component';

describe('FrontTaskViewComponent', () => {
  let component: FrontTaskViewComponent;
  let fixture: ComponentFixture<FrontTaskViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontTaskViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontTaskViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

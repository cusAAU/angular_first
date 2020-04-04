import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorsetableComponent } from './horsetable.component';

describe('TableComponent', () => {
  let component: HorsetableComponent;
  let fixture: ComponentFixture<HorsetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorsetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorsetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

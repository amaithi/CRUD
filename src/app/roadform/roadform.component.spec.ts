import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadformComponent } from './roadform.component';

describe('RoadformComponent', () => {
  let component: RoadformComponent;
  let fixture: ComponentFixture<RoadformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoadformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

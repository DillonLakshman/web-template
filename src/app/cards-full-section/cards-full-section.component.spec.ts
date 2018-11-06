import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsFullSectionComponent } from './cards-full-section.component';

describe('CardsFullSectionComponent', () => {
  let component: CardsFullSectionComponent;
  let fixture: ComponentFixture<CardsFullSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardsFullSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsFullSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

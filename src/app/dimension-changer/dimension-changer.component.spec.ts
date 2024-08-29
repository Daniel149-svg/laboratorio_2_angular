import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimensionChangerComponent } from './dimension-changer.component';

describe('DimensionChangerComponent', () => {
  let component: DimensionChangerComponent;
  let fixture: ComponentFixture<DimensionChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DimensionChangerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DimensionChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWayBondingComponent } from './two-way-bonding.component';

describe('TwoWayBondingComponent', () => {
  let component: TwoWayBondingComponent;
  let fixture: ComponentFixture<TwoWayBondingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoWayBondingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWayBondingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNamesComponent } from './list-names.component';

describe('ListNamesComponent', () => {
  let component: ListNamesComponent;
  let fixture: ComponentFixture<ListNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListNamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

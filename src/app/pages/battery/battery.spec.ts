import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Battery } from './battery';

describe('Battery', () => {
  let component: Battery;
  let fixture: ComponentFixture<Battery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Battery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Battery);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

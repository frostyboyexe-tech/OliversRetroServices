import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modding } from './modding';

describe('Modding', () => {
  let component: Modding;
  let fixture: ComponentFixture<Modding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Modding]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modding);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

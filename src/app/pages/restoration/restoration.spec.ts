import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Restoration } from './restoration';

describe('Restoration', () => {
  let component: Restoration;
  let fixture: ComponentFixture<Restoration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Restoration]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Restoration);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

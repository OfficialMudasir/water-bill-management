import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillGrievanceComponent } from './bill-grievance.component';

describe('BillGrievanceComponent', () => {
  let component: BillGrievanceComponent;
  let fixture: ComponentFixture<BillGrievanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillGrievanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillGrievanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

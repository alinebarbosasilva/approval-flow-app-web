import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehousemanUpdateComponent } from './warehouseman-update.component';

describe('SolicitationsUpdateComponent', () => {
  let component: WarehousemanUpdateComponent;
  let fixture: ComponentFixture<WarehousemanUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehousemanUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehousemanUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

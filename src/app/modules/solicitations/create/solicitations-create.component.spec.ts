import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationsCreateComponent } from './solicitations-create.component';

describe('SolicitationsUpdateComponent', () => {
  let component: SolicitationsCreateComponent;
  let fixture: ComponentFixture<SolicitationsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitationsCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitationsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

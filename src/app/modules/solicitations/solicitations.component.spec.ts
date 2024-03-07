import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitationsComponent } from './solicitations.component';

describe('UsersComponent', () => {
  let component: SolicitationsComponent;
  let fixture: ComponentFixture<SolicitationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolicitationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

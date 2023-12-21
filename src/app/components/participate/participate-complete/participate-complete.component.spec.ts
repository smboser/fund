import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticipateCompleteComponent } from './participate-complete.component';

describe('ParticipateCompleteComponent', () => {
  let component: ParticipateCompleteComponent;
  let fixture: ComponentFixture<ParticipateCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParticipateCompleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ParticipateCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

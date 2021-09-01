import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpasswordresetComponent } from './newpasswordreset.component';

describe('NewpasswordresetComponent', () => {
  let component: NewpasswordresetComponent;
  let fixture: ComponentFixture<NewpasswordresetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewpasswordresetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpasswordresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

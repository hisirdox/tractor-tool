import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratoresComponent } from './tratores.component';

describe('TratoresComponent', () => {
  let component: TratoresComponent;
  let fixture: ComponentFixture<TratoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TratoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

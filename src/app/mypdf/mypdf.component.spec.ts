import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MypdfComponent } from './mypdf.component';

describe('MypdfComponent', () => {
  let component: MypdfComponent;
  let fixture: ComponentFixture<MypdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MypdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MypdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

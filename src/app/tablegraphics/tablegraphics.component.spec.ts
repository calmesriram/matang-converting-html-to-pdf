import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablegraphicsComponent } from './tablegraphics.component';

describe('TablegraphicsComponent', () => {
  let component: TablegraphicsComponent;
  let fixture: ComponentFixture<TablegraphicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablegraphicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablegraphicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

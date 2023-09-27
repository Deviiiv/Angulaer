import { ComponentFixture, TestBed } from '@angular/core/testing';

import { aboutComponent } from './about.component';

describe('aboutComponent', () => {
  let component: aboutComponent;
  let fixture: ComponentFixture<aboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [aboutComponent]
    });
    fixture = TestBed.createComponent(aboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

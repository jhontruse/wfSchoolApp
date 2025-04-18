import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Not404Component } from './not404.component';

describe('Not404Component', () => {
  let component: Not404Component;
  let fixture: ComponentFixture<Not404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Not404Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Not404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

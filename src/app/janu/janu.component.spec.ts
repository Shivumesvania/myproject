import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanuComponent } from './janu.component';

describe('JanuComponent', () => {
  let component: JanuComponent;
  let fixture: ComponentFixture<JanuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JanuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JanuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

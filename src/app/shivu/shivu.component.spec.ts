import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShivuComponent } from './shivu.component';

describe('ShivuComponent', () => {
  let component: ShivuComponent;
  let fixture: ComponentFixture<ShivuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShivuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShivuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicSelectComponent } from './pic-select.component';

describe('PicSelectComponent', () => {
  let component: PicSelectComponent;
  let fixture: ComponentFixture<PicSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

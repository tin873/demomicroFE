import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibTestTinSpaComponent } from './lib-test-tin-spa.component';

describe('LibTestTinSpaComponent', () => {
  let component: LibTestTinSpaComponent;
  let fixture: ComponentFixture<LibTestTinSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibTestTinSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibTestTinSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

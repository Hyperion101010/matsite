import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlParserComponent } from './url-parser.component';

describe('UrlParserComponent', () => {
  let component: UrlParserComponent;
  let fixture: ComponentFixture<UrlParserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlParserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlParserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExplainComponent } from './directive-explain.component';

describe('DirectiveExplainComponent', () => {
  let component: DirectiveExplainComponent;
  let fixture: ComponentFixture<DirectiveExplainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveExplainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectiveExplainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

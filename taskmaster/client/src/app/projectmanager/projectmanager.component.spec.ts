import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectmanagerComponent } from './projectmanager.component';

describe('ProjectmanagerComponent', () => {
  let component: ProjectmanagerComponent;
  let fixture: ComponentFixture<ProjectmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

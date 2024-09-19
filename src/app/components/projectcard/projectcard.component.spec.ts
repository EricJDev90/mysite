import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCard } from './projectcard.component';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

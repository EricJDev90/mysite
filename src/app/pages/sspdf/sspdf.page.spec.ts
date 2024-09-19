import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSPDFPage } from './sspdf.page';

describe('SSPDFPage', () => {
  let component: SSPDFPage;
  let fixture: ComponentFixture<SSPDFPage>;

  beforeEach(async () => {
    fixture = TestBed.createComponent(SSPDFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

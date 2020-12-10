import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepoDialsComponent } from './sales-repo-dials.component';

describe('SalesRepoDialsComponent', () => {
  let component: SalesRepoDialsComponent;
  let fixture: ComponentFixture<SalesRepoDialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRepoDialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepoDialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

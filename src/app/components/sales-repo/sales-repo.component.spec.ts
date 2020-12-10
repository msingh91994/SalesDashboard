import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepoComponent } from './sales-repo.component';

describe('SalesRepoComponent', () => {
  let component: SalesRepoComponent;
  let fixture: ComponentFixture<SalesRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesRepoCardComponent } from './sales-repo-card.component';

describe('SalesRepoCardComponent', () => {
  let component: SalesRepoCardComponent;
  let fixture: ComponentFixture<SalesRepoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesRepoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesRepoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesGridComponent } from './favorites-grid.component';

describe('FavoritesGridComponent', () => {
  let component: FavoritesGridComponent;
  let fixture: ComponentFixture<FavoritesGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavoritesGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

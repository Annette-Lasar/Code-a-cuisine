import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineRecipes } from './cuisine-recipes';

describe('CuisineRecipes', () => {
  let component: CuisineRecipes;
  let fixture: ComponentFixture<CuisineRecipes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuisineRecipes],
    }).compileComponents();

    fixture = TestBed.createComponent(CuisineRecipes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeListItem } from './recipe-list-item';

describe('RecipeListItem', () => {
  let component: RecipeListItem;
  let fixture: ComponentFixture<RecipeListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecipeListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(RecipeListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

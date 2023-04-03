import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe: Recipe;

  onShowRecipeDetails (event: Recipe) {
    this.selectedRecipe = event;
  }
}

import { Component } from '@angular/core';

import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html'
})
export class RecipesComponent {
  selectedRecipe: Recipe = {name: '', description: '', imagePath: ''};

  onShowRecipeDetails (event: Recipe) {
    this.selectedRecipe = event;
  }
}

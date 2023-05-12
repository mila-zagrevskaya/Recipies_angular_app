import { Component, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe = {name: '', description: '', imagePath: '', ingredients: []};

  constructor(private recipeService: RecipeService) {}

  onSelectedRecipe(recipe: Recipe) {
    this.recipeService.onShowRecipeDetails(recipe);
  }
}

import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe = {name: '', description: '', imagePath: ''};
  @Output() emitRecipeFromButton = new EventEmitter<Recipe>();

  onButtonClick(event: Recipe) {
    this.emitRecipeFromButton.emit(event);
  }
}

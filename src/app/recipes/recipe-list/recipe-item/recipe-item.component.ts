import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe;
  @Output() emitRecipeFromButton = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick(event: Recipe) {
    this.emitRecipeFromButton.emit(event);
  }
}

import { Component, Input } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent {
  @Input() recipeItem: Recipe;
  @Input() index: number;

  ngOnInit(){
  }
}

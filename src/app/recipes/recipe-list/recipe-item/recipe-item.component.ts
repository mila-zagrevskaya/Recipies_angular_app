import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipeItem: Recipe = new Recipe('', '', '');

  constructor() { }

  ngOnInit(): void {
    console.log('recipeItem', this.recipeItem);
  }

}

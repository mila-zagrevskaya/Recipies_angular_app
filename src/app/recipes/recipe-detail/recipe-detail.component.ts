import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() detailsRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}

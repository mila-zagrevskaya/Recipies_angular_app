import { RecipeService } from 'src/app/services/recipe.service';
import { Component, OnInit } from '@angular/core';

import { Recipe } from '../../recipes/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit{
  recipe: Recipe;

  constructor(private recipeService: RecipeService){}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(() => {
      this.recipe = this.recipeService.selectedRecipe;
    })
  }
}

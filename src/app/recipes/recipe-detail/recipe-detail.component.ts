import { Component, OnInit } from '@angular/core';

import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from './../../shared/ingredient.model';

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

  onAddToShoppingList(ingredients: Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}

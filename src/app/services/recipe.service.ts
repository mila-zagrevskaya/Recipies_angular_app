import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "../recipes/recipe.model";
import { Ingredient } from "../shared/ingredient.model";

import { ShoppingListService } from "./shopping-list.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'Oven Baked Beef Brisket',
      'This is simply a test 1 ',
      'https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2019/06/oven-baked-beef-brisket-206.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20),
      ]),
    new Recipe(
      'Grilled sweet potatoes',
      'This is simply a test 2',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptgM_Xeou7ua4JazwuCjoEyZcYOaQ0SASNg&usqp=CAU',
      [
        new Ingredient('Potato', 3),
        new Ingredient('Lemon', 1),
        new Ingredient('Parsley', 1),
      ]),
    new Recipe(
      'Enchilada',
      'This is simply a test 3',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjDVxCVxGsxA0WPRc8AIgIzVHh5TyLzAA4w&usqp=CAU',
      [
        new Ingredient('Puff pastry', 2),
        new Ingredient('Cheese', 1),
        new Ingredient('Meat', 1),
      ]),
    new Recipe(
      'Garlic Butter Chicken Bites with Lemon Asparagus',
      'This is simply a test 4',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMaZ_QPCB0FIi4hMGovw--Dm7zJljWFkJ-w&usqp=CAU',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Asparagus', 10),
        new Ingredient('Lemon', 1),
      ]),
    new Recipe(
      'Soufflé omelette',
      'This is simply a test 5',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_G71ifSIxMIF9MFME_z7dtsWX3lqZ_rRXUg&usqp=CAU',
      [
        new Ingredient('Cheese', 1),
        new Ingredient('Egg', 3),
        new Ingredient('Pastry', 1),
        new Ingredient('Salad', 1),
      ]),
  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes() {
   return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  onShowRecipeDetails (recipe: Recipe) {
    this.recipeSelected.emit(recipe)
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.shoppingListService.addIngredients(ingredients);
  }
}
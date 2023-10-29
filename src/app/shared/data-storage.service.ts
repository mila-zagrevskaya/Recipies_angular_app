import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { RecipeService } from "../services/recipe.service";

@Injectable()
export class DataStorageService {
  RECIPES_DATA_BASE_LINK = 'https://recipe-book-ng-course-e12dd-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(this.RECIPES_DATA_BASE_LINK, recipes)
      .subscribe(response => {
        console.log(response);
      });
  }
}
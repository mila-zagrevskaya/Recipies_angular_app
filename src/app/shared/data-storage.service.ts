import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { RecipeService } from "../services/recipe.service";
import { Recipe } from "../recipes/recipe.model";

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

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.RECIPES_DATA_BASE_LINK)
      .pipe(map(recipes => {
        return recipes.map(recipe => {
          return {
            ...recipe, 
            ingredients: recipe.ingredients ? recipe.ingredients : []};
        })
      }),
      tap(recipes => {
        this.recipeService.setRecipes(recipes);
      })
      )
  }
}
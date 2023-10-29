import { Injectable } from "@angular/core";
import { 
  ActivatedRouteSnapshot, 
  Resolve, 
  RouterStateSnapshot 
} from "@angular/router";

import { Recipe } from "../recipes/recipe.model";
import { DataStorageService } from "../shared/data-storage.service";

@Injectable()
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.dataStorageService.fetchRecipes();
  }
}

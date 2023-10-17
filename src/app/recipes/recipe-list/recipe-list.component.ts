import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];

  constructor(
    private recipeService: RecipeService, 
    private router: Router,
    private route: ActivatedRoute){}

  ngOnInit(){
    this.recipeService.recipesChanged
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipes = recipes;
        }
      )
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}

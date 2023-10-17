import { Component, Input, OnInit,  } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

import { RecipeService } from 'src/app/services/recipe.service';

import { Recipe } from '../../recipes/recipe.model';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit{
  @Input() index: number;
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService, private route: ActivatedRoute,
    private router: Router ){
  }

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.recipe = this.recipeService.getRecipe(this.id);
        }
      )
  }

  onAddToShoppingList(ingredients: Ingredient[]){
    this.recipeService.addIngredientsToShoppingList(ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    //alternative way:
    // this.router.navigate(['../', this.id ,'edit'], {relativeTo: this.route})
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['/recipes']);
  }
}

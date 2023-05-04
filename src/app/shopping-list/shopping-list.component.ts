import { Component } from '@angular/core';
import { ShoppingListService } from '../services/shopping-list.service';

import { Ingredient } from './../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html'
})
export class ShoppingListComponent {

  ingredients: Ingredient[]

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.ingredients;
  }

  addNewIngredientToList(ingredient: Ingredient) {
    this.shoppingListService.addNewIngredientToList(ingredient);
  }
}

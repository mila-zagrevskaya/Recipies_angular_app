import { Component, ViewChild, ElementRef } from '@angular/core';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  ingredientNew: Ingredient;

  isBtnDisabled:boolean = true;

  constructor( private shoppingListService: ShoppingListService){}

  addNewIngredient(): void {
    this.ingredientNew = new Ingredient(
      this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value
      );
      this.shoppingListService.addNewIngredientToList(this.ingredientNew);
  }

  onInputChange(): void {
    this.isBtnDisabled = !this.nameInput?.nativeElement.value || !this.amountInput.nativeElement.value;
  }
}

import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;
  @Output() newIngredientAdded = new EventEmitter<Ingredient>();

  ingredientNew: Ingredient;

  addNewIngredient(): void {
    this.ingredientNew = new Ingredient(
      this.nameInput && this.nameInput.nativeElement.value, 
      this.amountInput && this.amountInput.nativeElement.value
      )
    this.newIngredientAdded.emit(this.ingredientNew);
    }
}

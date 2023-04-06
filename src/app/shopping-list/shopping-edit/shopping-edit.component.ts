import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amountInput') amountInput: ElementRef;

  @Output() newIngredient = new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  
  ingredientNew: Ingredient;

  addNewIngredient() {
    this.newIngredient.emit(new Ingredient(
      this.nameInput.nativeElement.value, 
      this.amountInput.nativeElement.value
    ));
  }
}

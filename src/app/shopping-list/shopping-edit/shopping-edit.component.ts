import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ShoppingListService } from 'src/app/services/shopping-list.service';

import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;

  constructor( private shoppingListService: ShoppingListService){}

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing
      .subscribe(
        (index: number) => {
          this.editedItemIndex = index;
          this.editMode = true;
        }
      );
  }

  onAddItem(form: NgForm): void {
    const value = form.value
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addNewIngredientToList(newIngredient);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  @Output() showRecipeDetails = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1 ', 'https://d47gxy3fatgwk.cloudfront.net/wp-content/uploads/2019/06/oven-baked-beef-brisket-206.jpg'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQptgM_Xeou7ua4JazwuCjoEyZcYOaQ0SASNg&usqp=CAU'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjDVxCVxGsxA0WPRc8AIgIzVHh5TyLzAA4w&usqp=CAU'),
    new Recipe('A Test Recipe 4', 'This is simply a test 4', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDMaZ_QPCB0FIi4hMGovw--Dm7zJljWFkJ-w&usqp=CAU'),
    new Recipe('A Test Recipe 5', 'This is simply a test 5', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_G71ifSIxMIF9MFME_z7dtsWX3lqZ_rRXUg&usqp=CAU'),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClick (event: Recipe) {
    this.showRecipeDetails.emit(event);
  }
}

import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AddDishComponent} from '../add-dish/add-dish.component';
import {Dish} from 'src/app/shared/types/dish.interface';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss'],
})
export class DishDetailsComponent  {
  constructor(
    @Inject(MAT_DIALOG_DATA) public dish: Dish,
    public dialogRef: MatDialogRef<AddDishComponent>
  ) {}

}

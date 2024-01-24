import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCategoryComponent} from '../../dialogs/add-category/add-category.component';
import {AddDishComponent} from '../../dialogs/add-dish/add-dish.component';
import {DataBaseService} from '../../services/data-base.service';
import { Store } from '@ngrx/store';
import { menuActions } from '../../store/actions';
import { selectMenu } from '../../store/reducers';
import { Dish } from 'src/app/shared/types/dish.interface';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  mainMenu: Dish[] | null | undefined = []

  constructor(
    public dialog: MatDialog,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(menuActions.getMenu());

    this.store.select(selectMenu).subscribe((menu: Dish[] | null | undefined) => this.mainMenu = menu);
  }

  addCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {});
  }

  addDish(): void {
    const dialogRef = this.dialog.open(AddDishComponent, {});
  }
}

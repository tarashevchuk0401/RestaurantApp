import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCategoryComponent} from '../../dialogs/add-category/add-category.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent {
  constructor(public dialog: MatDialog) {}

  addCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {});
  }
}

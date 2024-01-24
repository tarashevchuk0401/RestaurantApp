import {Component} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DataBaseService} from '../../services/data-base.service';
import {Store} from '@ngrx/store';
import { menuActions } from '../../store/actions';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  newCategory: string = '';

  constructor(
    public store: Store,
    public dialogRef: MatDialogRef<AddCategoryComponent>,
  ) {}

  addCategory() {
    if (this.newCategory) {
      this.store.dispatch(menuActions.addNewCategory({request: this.newCategory}))
    }
  }
}

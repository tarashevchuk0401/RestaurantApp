import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {DataBaseService} from '../../services/data-base.service';
import {Store} from '@ngrx/store';
import { menuActions } from '../../store/actions';
import { SearchBarService } from 'src/app/shared/services/search-bar.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent implements OnInit {
  newCategory: string = '';
// text: string

  constructor(
    public store: Store,
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private searService: SearchBarService,
  ) {}

  ngOnInit(): void {
    this.searService.searchTerm.subscribe(d => console.log(d))
  }

  addCategory() {
    if (this.newCategory) {
      this.store.dispatch(menuActions.addNewCategory({request: this.newCategory}))
    }
  }
}

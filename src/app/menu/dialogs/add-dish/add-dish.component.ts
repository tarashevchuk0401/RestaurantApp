import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {MatInput} from '@angular/material/input';
import {DataBaseService} from '../../services/data-base.service';
import { Store } from '@ngrx/store';
import { menuActions } from '../../store/actions';
import { selectCategories } from '../../store/reducers';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss'],
})
export class AddDishComponent implements OnInit {
  formDish: any;
  allCategories:any = this.store.select(selectCategories);

  constructor(
    public dialogRef: MatDialogRef<AddDishComponent>,
    private fb: FormBuilder,
    private dataBaseService: DataBaseService,
    private store: Store,
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.store.dispatch(menuActions.getCategories());
  }
  
  initializeForm():void{
    this.formDish = this.fb.group({
      title: [''],
      description: [''],
      price: [''],
      ingredients: [''],
      category: [''],
    });
  }

  addNewDish() {
    console.log(this.formDish.value);
  }
}

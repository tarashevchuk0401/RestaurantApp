import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatInput } from '@angular/material/input';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss'],
})
export class AddDishComponent implements OnInit {
  formDish: any;

  constructor(public dialogRef: MatDialogRef<AddDishComponent>, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formDish = this.fb.group({
      title: [''],
      description: [''],
      price: [''],
      ingredients: [''],
      category: [''],
    })
  }

  addNewDish(){
    console.log(this.formDish)
  }
}

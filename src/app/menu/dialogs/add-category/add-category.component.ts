import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DataBaseService } from '../../services/data-base.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss'],
})
export class AddCategoryComponent {
  newCategory: string = '';

  constructor(public dialogRef: MatDialogRef<AddCategoryComponent>, private dataBaseService: DataBaseService) {}

  addCategory(){
    if(this.newCategory){
      this.dataBaseService.addCategory(this.newCategory).subscribe(d => console.log(d)) 
    }
  }

}

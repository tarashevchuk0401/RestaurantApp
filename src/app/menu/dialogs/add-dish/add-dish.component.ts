import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Store} from '@ngrx/store';
import {menuActions} from '../../store/actions';
import {selectCategories} from '../../store/reducers';
import {Dish} from 'src/app/shared/types/dish.interface';
import {nanoid} from 'nanoid';
import {AngularFireStorage} from '@angular/fire/compat/storage';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss'],
})
export class AddDishComponent implements OnInit {
  formDish!: FormGroup;
  allCategories: any = this.store.select(selectCategories);
  imageFile: any;

  constructor(
    public dialogRef: MatDialogRef<AddDishComponent>,
    private fb: FormBuilder,
    private store: Store,
    private fireStorage: AngularFireStorage
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.store.dispatch(menuActions.getCategories());
  }

  initializeForm(): void {
    this.formDish = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(3)]],
      price: ['', [Validators.required, Validators.pattern('^[0-9]+(.[0-9]{1,2})?$')]],
      ingredients: [''],
      category: ['', [Validators.required]],
    });
  }

  async addNewDish() {
    let newDish: Dish = {
      title: this.formDish.value.title,
      // Creating string[] from input. For making paragraphs
      description: this.formDish.value.description.split('\n').filter((i: string) => i !== ''),

      price: this.formDish.value.price,
      // Creating string[] from input. For making paragraphs
      ingredients: this.formDish.value.ingredients
        .replaceAll(',', ' ')
        .split(' ')
        .filter((i: string) => i !== ''),

      category: this.formDish.value.category,
      id: nanoid(),
    };

    if (this.imageFile) {
      let path = `${this.imageFile.name}`;
      const uploadTask = await this.fireStorage.upload(path, this.imageFile);
      const url = await uploadTask.ref.getDownloadURL();
      newDish.imageUrl = url;
    }

    this.store.dispatch(menuActions.addDish({dish: newDish}));

    this.formDish.reset();
  }

  uploadImage(event: any): void {
    this.imageFile = event.target.files[0];
  }
}

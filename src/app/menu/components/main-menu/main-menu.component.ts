import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {AddCategoryComponent} from '../../dialogs/add-category/add-category.component';
import {AddDishComponent} from '../../dialogs/add-dish/add-dish.component';
import {Store} from '@ngrx/store';
import {menuActions} from '../../store/actions';
import {selectCategories, selectMenu} from '../../store/reducers';
import {Dish} from 'src/app/shared/types/dish.interface';
import {SearchBarService} from 'src/app/shared/services/search-bar.service';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss'],
})
export class MainMenuComponent implements OnInit {
  allMenu: Dish[] | null | undefined = [];
  displayedMenu: Dish[] | null | undefined = [];

  categories: string[] | null | undefined = [];
  text: any;

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    // this.searchBarService.searchTerm.subscribe((d) => {
    //   this.text = d;
    //   console.log(d);
    // });

    this.searchBarService.listenSearchTerm().subscribe((d) => {
      this.text = d;
      console.log(d);
    });

    this.store.dispatch(menuActions.getMenu());
    this.store
      .select(selectMenu)
      .subscribe((menu: Dish[] | null | undefined) => {
        menu?.map((i) => this.allMenu?.push(i));
        menu?.map((i) => this.displayedMenu?.push(i));
      });

    this.store.dispatch(menuActions.getCategories());
    this.store
      .select(selectCategories)
      .subscribe(
        (allCategories: string[] | null | undefined) =>
          (this.categories = allCategories)
      );
  }

  addCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {});
  }

  addDish(): void {
    const dialogRef = this.dialog.open(AddDishComponent, {});
  }

  filterByCategory(category: string): void {
    if (category === 'all' && this.allMenu) {
      this.displayedMenu?.push(...this.allMenu);
    } else {
      this.displayedMenu = this.allMenu?.filter(
        (dish: Dish) => dish.category === category
      );
    }
  }
}

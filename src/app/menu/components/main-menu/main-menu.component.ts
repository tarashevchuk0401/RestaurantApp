import {AfterViewInit, Component, OnInit} from '@angular/core';
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
export class MainMenuComponent implements OnInit, AfterViewInit {
  allMenu: Dish[] | null | undefined = [];
  displayedMenu: Dish[] | null | undefined = [];

  categories: string[] | null | undefined = [];
  currentCategory: string = 'all';

  constructor(
    public dialog: MatDialog,
    private store: Store,
    private searchBarService: SearchBarService
  ) {}

  ngOnInit(): void {
    this.store.dispatch(menuActions.getMenu());
    this.store.select(selectMenu).subscribe((menu: Dish[] | null | undefined) => {
      menu?.map((i) => this.allMenu?.push(i));
      menu?.map((i) => this.displayedMenu?.push(i));
    });

    this.store.dispatch(menuActions.getCategories());
    this.store
      .select(selectCategories)
      .subscribe((allCategories: string[] | null | undefined) => (this.categories = allCategories));
  }

  ngAfterViewInit(): void {
    //Subscribing for search term from header
    this.searchBarService.listenSearchTerm().subscribe((searchTerm: string) => {
      this.displayedMenu = this.allMenu?.filter((i) =>
        i.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase())
      );
      this.currentCategory = 'all';
    });
  }

  addCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {});
  }

  addDish(): void {
    const dialogRef = this.dialog.open(AddDishComponent, {
      width: '600px',
    });
  }

  filterByCategory(category: string): void {
    if (category === 'all' && this.allMenu) {
      this.displayedMenu?.push(...this.allMenu);
      this.currentCategory = 'all';
    } else {
      this.displayedMenu = this.allMenu?.filter((dish: Dish) => dish.category === category);
      this.currentCategory = category;
    }
  }
}

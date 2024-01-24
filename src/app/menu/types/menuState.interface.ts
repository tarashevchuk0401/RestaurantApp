import { BackendError } from 'src/app/shared/types/backendError.interface';
import {Dish} from 'src/app/shared/types/dish.interface';

export interface MenuState {
  isLoading: boolean;
  categories: string[] | null | undefined;
  menu: Dish[] | null | undefined;
  addedCategory: string | null | undefined;
  addedDish: Dish | null | undefined;
  validationErrors: BackendError | null,

}

import {createFeature, createReducer, on} from '@ngrx/store';
import {MenuState} from '../types/menuState.interface';
import {menuActions} from './actions';

const initialState: MenuState = {
  isLoading: false,
  menu: null,
  categories: null,
  addedCategory: null,
  addedDish: null,
  validationErrors: null,
};

const menuFeature = createFeature({
  name: 'menu',
  reducer: createReducer(
    initialState,

    on(menuActions.addNewCategory, (state) => ({
      ...state,
    })),
    on(menuActions.categoryAdded, (state, action) => ({
      ...state,
      addedCategory: action.response.category,
    })),
    on(menuActions.categoryFailed, (state, action) => ({
      ...state,
      validationErrors: action.error,
      addedCategory: null,
    }))
  ),
});

export const {
  name: menuFeatureKey,
  reducer: menuReducer,
  selectAddedCategory,
  selectAddedDish,
  selectCategories,
  selectMenu,
  selectIsLoading,
  selectMenuState,
  selectValidationErrors,
} = menuFeature;

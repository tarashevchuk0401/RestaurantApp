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

    //Add new category
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
    })),

    //Get all categories
    on(menuActions.getCategories, (state) => ({
      ...state,
    })),
    on(menuActions.getCategoriesSuccess, (state, action) => ({
      ...state,
      categories: action.response,
    })),
    on(menuActions.getCategoriesFailed, (state, action) => ({
      ...state,
      validationErrors: action.error,
      categories: null,
    })),
    
    //Add new dish
    on(menuActions.addDish, (state) => ({
      ...state,
    })),
    on(menuActions.addDishSuccess, (state, action) => ({
      ...state,
      addedDish: action.dish,
    })),
    on(menuActions.addDishFailed, (state, action) => ({
      ...state,
      validationErrors: action.error,
      addedDish: null,
    })),

      //Get all menu
      on(menuActions.getMenu, (state) => ({
        ...state,
      })),
      on(menuActions.getMenuSuccess, (state, action) => ({
        ...state,
        menu: action.response,
      })),
      on(menuActions.getCategoriesFailed, (state, action) => ({
        ...state,
        validationErrors: action.error,
        menu: null,
      })),
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

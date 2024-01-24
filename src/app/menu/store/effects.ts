import {inject} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {DataBaseService} from '../services/data-base.service';
import {catchError, map, of, switchMap} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import {menuActions} from './actions';

export const addCategory = createEffect(
  (actions$ = inject(Actions), dataBaseService = inject(DataBaseService)) => {
    return actions$.pipe(
      ofType(menuActions.addNewCategory),
      switchMap(({request}) => {
        return dataBaseService.addCategory(request).pipe(
          map((response) => {
            return menuActions.categoryAdded({response});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              menuActions.categoryFailed({
                error: errorResponse.error.error.message,
              })
            );
          })
        );
      })
    );
  },
  {functional: true}
);

export const getCategories = createEffect(
  (actions$ = inject(Actions), dataBaseService = inject(DataBaseService)) => {
    return actions$.pipe(
      ofType(menuActions.getCategories),
      switchMap(() => {
        return dataBaseService.getAllCategories().pipe(
          map((response) => {
            return menuActions.getCategoriesSuccess({
              response: Array.from(response),
            });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              menuActions.getCategoriesFailed({
                error: errorResponse.error.error.message,
              })
            );
          })
        );
      })
    );
  },
  {functional: true}
);

export const addDish = createEffect(
  (actions$ = inject(Actions), dataBaseService = inject(DataBaseService)) => {
    return actions$.pipe(
      ofType(menuActions.addDish),
      switchMap(({dish}) => {
        return dataBaseService.addDish(dish).pipe(
          map((dish) => {
            return menuActions.addDishSuccess({dish});
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              menuActions.getCategoriesFailed({
                error: errorResponse.error.error.message,
              })
            );
          })
        );
      })
    );
  },
  {functional: true}
);

export const getMenu = createEffect(
    (actions$ = inject(Actions), dataBaseService = inject(DataBaseService)) => {
        return actions$.pipe(
            ofType(menuActions.getMenu),
            switchMap(() => {
                return dataBaseService.getMenu().pipe(
                    map((response) => {
                        return menuActions.getMenuSuccess({response})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                          menuActions.getCategoriesFailed({
                            error: errorResponse.error.error.message,
                          })
                        );
                      })
                )
            })
        )
    },
    {functional: true}
)

import { inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { DataBaseService } from "../services/data-base.service";
import { catchError, map, of, switchMap } from "rxjs";
import { HttpErrorResponse } from "@angular/common/http";
import { menuActions } from "./actions";

export const addCategory = createEffect(
    (actions$ = inject(Actions), dataBaseService = inject(DataBaseService)) => {
        return actions$.pipe(
            ofType(menuActions.addNewCategory),
            switchMap(({request}) => {
                return dataBaseService.addCategory(request).pipe(
                    map((response) => {
                        return menuActions.categoryAdded({response})
                    }),
                    catchError((errorResponse: HttpErrorResponse) => {
                        return of(
                          menuActions.categoryFailed({
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
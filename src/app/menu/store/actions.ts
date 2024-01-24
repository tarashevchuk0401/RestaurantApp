import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BackendError } from "src/app/shared/types/backendError.interface";
import { Dish } from "src/app/shared/types/dish.interface";

export const menuActions = createActionGroup({
    source: 'menu',
    events: {
        'Add new category': props<{request: string}>(),
        'Category Added': props<{response: {category: string}}>(),
        'Category failed': props<{error: BackendError}>(),
        
        'Get categories': emptyProps(),
        'Get categories success': props<{response: string[]}>(),
        'Get categories failed': props<{error: BackendError}>(),

        'Add dish' : props<{dish: Dish}>(),
        'Add dish success' : props<{dish: Dish}>(),
        'Add dish failed' : props<{error: BackendError}>()
    }
})
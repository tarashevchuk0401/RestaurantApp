import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { BackendError } from "src/app/shared/types/backendError.interface";

export const menuActions = createActionGroup({
    source: 'menu',
    events: {
        'Add new category': props<{request: string}>(),
        'Category Added': props<{response: {category: string}}>(),
        'Category failed': props<{error: BackendError}>(),
        
        'Get categories': emptyProps(),
        'Get categories success': props<{response: string[]}>(),
        'Get categories failed': props<{error: BackendError}>(),
    }
})
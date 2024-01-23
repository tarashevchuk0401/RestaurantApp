import { BackendError } from "../../shared/types/backendError.interface";
import { CurrentUserData } from "../../shared/types/currentUser.interface";
import { AuthResponseInterface } from "./authResponse.interface";

export interface AuthStateInterface {
    currentUser: AuthResponseInterface | null | undefined,
    currentUserData: CurrentUserData | null | undefined,
    isLoading: boolean,
    validationErrors: BackendError | null,
}
import { BackendError } from "../../shared/types/backendError.interface";
import { AuthResponseInterface } from "./authResponse.interface";

export interface AuthStateInterface {
    currentUser: AuthResponseInterface | null | undefined,
    isLoading: boolean,
    validationErrors: BackendError | null,
}
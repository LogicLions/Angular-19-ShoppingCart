import { createAction, props } from "@ngrx/store";
import { product } from "../../interfaces/product";

export const loadInitialProduct = createAction('[product] load Initial Product');
export const loadInitialProductSuccess = createAction('[product] load initial product success', props<{products: any[]}>());
export const loadInitialProductError = createAction('[product] load initial product error', props<{error: string}>());
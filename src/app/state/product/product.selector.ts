import { createFeatureSelector, createSelector } from "@ngrx/store";
import { productState } from "./product.reducer";

export const selectProductFeature = createFeatureSelector<productState>('product');
export const selectProducts = createSelector(selectProductFeature, state => state.products);
export const selectIsLoading = createSelector(selectProductFeature, state => state.isLoading);
export const selectError = createSelector(selectProductFeature, state => state.error);
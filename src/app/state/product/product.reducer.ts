import { createReducer } from '@ngrx/store';
import { product } from '../../interfaces/product';
import * as ProductActions from './product.actions';
import { on } from '@ngrx/store'

export interface productState  
{
    products: product[] | null
    isLoading : boolean
    error : string | null
}

export const initialState : productState = 
{
    products : null,
    isLoading : true,
    error : null
}

export const productReducer = createReducer(
    initialState,

    on(ProductActions.loadInitialProduct, (state)=>{
        console.log('reducer');
        console.log('state', state);
        
        
        return {
            ...state,
            isLoading : true,
            products : null,
            error : null
        }    
    }),

    on(ProductActions.loadInitialProductSuccess, (state, {products})=>{
        return {
            ...state,
            products,
            isLoading : false,
            error : null
        }
    }),

    on(ProductActions.loadInitialProductError, (state)=>{
        return {
            ...state,
            products : null,
            isLoading : false,
            error : "error occured"
        }
    })
)
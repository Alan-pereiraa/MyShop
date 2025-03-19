import { combineReducers } from "redux";
import { userSlice } from "./User/user-slice";
import { productsSilce } from "./Products/product-slice";
import categorySlice from "./Category/category-slice";


export const rootReducer = combineReducers({
    userReducer: userSlice.reducer,
    productsSilce: productsSilce.reducer,
    categoryReducer: categorySlice,
});

export type RootReducer = ReturnType<typeof rootReducer>;

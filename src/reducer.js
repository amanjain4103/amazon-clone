export const initialState = {
    basket: [],
    products: [],
    user:{},
    productToBeViewed:{}

};

export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => parseFloat(item.price) + parseFloat(amount), 0);

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket:[...state.basket, action.item]
            };
        case "ADD_PRODUCTS": 
            return {
                ...state,
                products:[...action.item]
            }
        case "REMOVE_FROM_BASKET": 
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id );
            let newBasket = [...state.basket];

            if(index >=0) {
                newBasket.splice(index,1)

            } else {
                console.warn(
                    `can't remove product (id: ${action.id}) as its not in basket!`
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER": 
            return {
                ...state,
                user: action.user
            }

        case "EMPTY_BASKET": 
            return {
                ...state,
                basket: []
            }
        
        case "SET_PRODUCT_VIEW": 
            return {
                ...state,
                productToBeViewed:action.item
            }

        default: return state;
    }
}

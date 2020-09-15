export const initialState = {
    basket: [],
    products: [],
    user:{},
    productToBeViewed:{},
    searchQuery: ""

};

export const getBasketTotal = (basket) => {
    let total = parseFloat(0);
        basket.map((item) => {
            if(item.numberOfItems) {
                total+= parseFloat(item.price * item.numberOfItems);
            }
            total+= parseFloat(item.price)
            return item;
        })
        return parseFloat(total).toFixed(2);
}
  
  

export const reducer = (state, action) => {
    switch(action.type) {
        case "ADD_TO_BASKET":

            let isChanged = false;
            let newBasketAfterAddition = state.basket.map( (basketItem,currentIndex) => {
                if(basketItem.id === action.item.id) {
                    isChanged = true;
                    if(basketItem.numberOfItems) {
                        basketItem.numberOfItems += 1;
                    }else {
                        basketItem.numberOfItems = 1;
                    }
                    return basketItem;   
                }
                return basketItem;
            });

            if(!isChanged) 
            {
                return {
                    ...state,
                    basket : [...state.basket, action.item]
                }
            }else {
                return {
                    ...state,
                    basket: newBasketAfterAddition
                };
            }

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

        case "ADD_SEARCH_QUERY":
            return {
                ...state,
                searchQuery: action.item
            }

        default: return state;
    }
}

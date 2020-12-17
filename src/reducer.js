export const initialState = {
	basket: [],
	user: null,
};

export const getBasketTotal= (basket) =>
	//incriment all of the prices in the basket starting at 0 and returns the total number - Called a reduce function
	basket?.reduce((amount, item) => item.price + amount, 0);


const reducer = (state, action ) => {
	console.log(action);
	switch(action.type){
		//for Auth
		case "SET_USER": 
			return {
				...state,
				user: action.user
			}
		case "ADD_TO_BASKET":
			//logic for adding item to basket 
			return { 
				...state,
				basket: [...state.basket, action.item],
			};
		case "REMOVE_FROM_BASKET":
			//Logic for removing item from basket;
			let newBasket = [...state.basket]; //copy the basket 
			//check to see if product exists 
			const index = state.basket.findIndex((basketItem)=> basketItem.id === action.id);
			
			if(index >= 0){
				//if item in basket exists, remove item from that index 
				newBasket.splice(index, 1); // splice that new item at that specific index
				
			} else {
				console.warn(
					`Cant remove product (id: ${action.id}) as it is not in basket`
				);
				
			}
			//return the new state with or without the item 
			return { 
				...state, 
				basket: newBasket,
			}; 
		default:
			return state; 
			
	}
};

export default reducer;
// Set up data layer 
// We need this to track the basket
import  React, { createContext, useContext, useReducer } from 'react'

//This is the data layer
export const StateContext = createContext();

//Build a provider to wrap entire app and give access to 
export const StateProvider = ({reducer, initialState, children}) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);


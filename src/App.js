import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";


function App() {
	const [{ user }, dispatch] = useStateValue();	

	
//useEffect
//piece of code which runs based on a given condition
useEffect(() => { //create a listener to see if the user is signed in or out
//For auth
	const unsubscribe = auth.onAuthStateChanged((authUser) => {
		if (authUser){
			//When the user is logged in push into the data layer...
			dispatch({
				type: "SET_USER", //specified in reducer
				user: authUser
			})
		} else {
			// the user is logged out 
			dispatch({
				type: "SET_USER",  //specified in reducer
				user: null
			})
		}
	});
	
	return() => {
		//Cleanup oparations 
		unsubscribe();
	}
}, []);
	
console.log(user);
	
  return (
	 <Router>
		<div className="app">
			<Switch>
				<Route path="/checkout">
				<Header />
					<Checkout />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/">
					<Header />
					<Home />
				</Route>
			</Switch>
		</div>
	 </Router>
  );
}

export default App;

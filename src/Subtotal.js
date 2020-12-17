import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal(){
	const [{ basket }, dispatch] = useStateValue();
	return(
		<div className="subtotal">
			{/*Price*/}
			<CurrencyFormat //from react-currency-format 
				renderText={(value) => (
					<>	   
						<p>
						Subtotal ({basket.length} items): <strong>{` ${value}`} </strong>
						</p>
						<small className="subtotal__gift">
							<input type="checkbox" /> This order contains a gift
						</small>
					</>
						   
						   
				)}
				decimalScale={2}
				value={getBasketTotal(basket)}
				displayType={"text"}
				thousandSeparator={true}
				prefix={"$"}
			/>
			{/*Button*/}
			<button>Proceed to Checkout</button>
		</div>
	)
}

export default Subtotal
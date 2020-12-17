import React from 'react';
import Product from './Product';
import './Home.css';


function Home(){
	return(
		<div className="home">
			<img 
				className="home__image"
				src="https://www.resortdata.com/wp-content/uploads/2018/02/Ski-Inside-Banner.jpg" 
				alt=""
			/>
			
			{/*Product id, title, price, rating, image */}
		<div className="home__header">
			<h2 className="home__subheader">Featured Skis</h2>
			<div className="home__row">
				<Product 
					id="12321341"
					title="Salomon QST 85 Skis"
					price={650.97}
					rating={5}
					image="https://www.amazon.com/images/I/51f7Xcblw8L._AC_UL640_FMwebp_QL65_.jpg"
				/>
				<Product 
					id="12321341"
					title="Rossignol Soul 7 HD Skis Mens"
					price={1099.25}
					rating={5}
					image="https://www.amazon.com/images/I/71RTPtexnuL._AC_UL640_FMwebp_QL65_.jpg"
				/>
			</div>
		</div>
		<div className="home__header">
			<h2 className="home__subheader">Showcase skis</h2>
					<div className="home__row">
						<Product 
							id="12321341"
							title="Burton Anon Helix 2.0 Goggles Mens"
							price={25.99}
							rating={5}
							image="https://www.amazon.com/images/I/51i1WnpBDzL._AC_UL640_FMwebp_QL65_.jpg"
						/>
						<Product 
							id="12321341"
							title="Oakley Flight Deck Ski Goggles"
							price={230}
							rating={4}
							image="https://www.amazon.com/images/I/71xswa2JQLL._AC_UL640_FMwebp_QL65_.jpg"
						/>
						<Product 
							id="12321341"
							title="Smith Optics 4D MAG Snow Goggle"
							price={129.95}
							rating={2}
							image="https://www.amazon.com/images/I/51wz38jdBCL._AC_UL640_FMwebp_QL65_.jpg"
						/>
					</div>
			</div>
		<div className="home__header">
			<h2 className="home__subheader">Showcase skis</h2>
				<div className="home__row">
					<Product 
						id="12321341"
						title="Smith Optics Snowboarding-Helmets Smith Optics Helmet"
						price={51.75}
						rating={5}
						image="https://www.amazon.com/images/I/716fVeOZhvL._AC_UL640_FMwebp_QL65_.jpg"
					/>
					<Product 
						id="12321341"
						title="Smith Optics Snowboarding-Helmets Smith Optics Helmet"
						price={51.75}
						rating={5}
						image="https://www.amazon.com/images/I/716fVeOZhvL._AC_UL640_FMwebp_QL65_.jpg"
					/>
					<Product 
						id="12321341"
						title="Smith Optics Snowboarding-Helmets Smith Optics Helmet"
						price={51.75}
						rating={5}
						image="https://www.amazon.com/images/I/716fVeOZhvL._AC_UL640_FMwebp_QL65_.jpg"
					/>
					<Product 
						id="12321341"
						title="Smith Optics Snowboarding-Helmets Smith Optics Helmet"
						price={51.75}
						rating={5}
						image="https://www.amazon.com/images/I/716fVeOZhvL._AC_UL640_FMwebp_QL65_.jpg"
					/>
					<Product 
						id="12321341"
						title="Smith Optics Snowboarding-Helmets Smith Optics Helmet"
						price={51.75}
						rating={5}
						image="https://www.amazon.com/images/I/716fVeOZhvL._AC_UL640_FMwebp_QL65_.jpg"
					/>
				</div>
			</div>
		</div>
	
	);
}

export default Home
import React, { useContext, useState } from 'react'
import Smurf from './SmurfTemplate'
import { SmurfsContext } from '../contexts/SmurfsContext'

function Smurfs() {
    const { smurfs } = useContext(SmurfsContext)
    return (
        <div>
            {smurfs.map(smurf => (
               
               <Smurf smurf={smurf} />
            ))}
        </div>
    )
}



export default Smurfs;



// using one context point, can set all 3 attributes to one {} 

// const myData = useContext(ContextObject);

// const addItem = item => {
// 		setCart([...cart, item]);
// 	};













// const addItem = item => {
//     setCart([...cart, item]);
// };


// onst Products = () => {
// 	const { products, addItem } = useContext(ProductContext);
// 	return (
// 		<div className="products-container">
// 			{products.map(product => (
// 				<Product
// 					key={product.id}
// 					product={product}
// 					addItem={addItem}
// 				/>
// 			))}
// 		</div>
// 	);
// };
import React, { useContext, useState } from 'react'
import { SmurfTemplate } from './SmurfTemplate'
import { SmurfsContext } from '../contexts/SmurfsContext'

export const Smurfs = () => {
    const [smurfs, setSmurfs] = useContext(SmurfsContext)
    return (
        <div>
            {smurfs.map(smurfs => (
                <SmurfTemplate name={smurfs.name} age={smurfs.age} height={smurfs.height} />
            ))}
        </div>
    )
}



export default Smurfs;


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
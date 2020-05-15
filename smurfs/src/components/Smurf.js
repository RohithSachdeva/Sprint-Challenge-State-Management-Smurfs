import React, { useContext } from 'react'
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
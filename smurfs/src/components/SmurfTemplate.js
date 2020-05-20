import React from 'react'


function Smurf(props) {
    return (
        <div>
            <h2>Name: {props.smurf.name}</h2>
            <h3>Age: {props.smurf.age}</h3>
            <h3>Height: {props.smurf.height}</h3>
            
        </div>
    )
}

export default Smurf;







// const addToCart = (plant) => {
//     setCart([...cart, plant]);
//   };


// export default function Players(props) {
//     console.log(props);

//     return (
//         <div className='box' data-testid ="render">
//             <h2>{props.user.name}</h2>
//             <h3>{props.user.country}</h3>
//             <h4>{props.user.searches}</h4>
//         </div>
//     );
// }

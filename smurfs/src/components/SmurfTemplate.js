import React from 'react'

export const SmurfTemplate = ({name, age, height}) => {
    return (
        <div>
            <h2>{name}</h2>
            <h3>{age}</h3>
            <h3>{height}</h3>
        </div>
    )
}










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

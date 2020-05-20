import React, { useState } from 'react';


function SmurfForm(props) {
    const [addSmurf, setAddSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    const handleChanges = e => {
        setAddSmurf({
            ...addSmurf,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        props.addedSmurf(addSmurf);
        setAddSmurf({
            name: '',
            age: '',
            height: '',
        });
    }
    
    return (
        <div>
            <form>
                <input
                    placeholder='Name'
                    type="text"
                    name="name"
                    value={addSmurf.name}
                    onChange={handleChanges}
                />
                <input
                    placeholder='Age'
                    type="text"
                    name="age"
                    value={addSmurf.age}
                    onChange={handleChanges}
                />
                <input
                    placeholder='Height'
                    type="text"
                    name="height"
                    value={addSmurf.height}
                    onChange={handleChanges}
                />
                <button onClick={handleSubmit}>Add Smurf</button>
            </form>
        </div>

    )
}

export default SmurfForm;





//Use separate state for new smurfs than the previous ones? ; don't need constructor since using function.  useState -> name: age: height: 

// class SmurfForm extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             name: '',
//             age: '',
//             height: ''
//         }
//     }
//     handleChanges = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit = e => {
//         e.preventDefault()
//         axios
//             .post('http://localhost:3333/smurfs', this.state)
//             .then(res => {
//                 console.log(res)

//             })
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <input
//                         placeholder='Name'
//                         type="text"
//                         name="name"
//                         value={this.state.name}
//                         onChange={this.handleChanges}
//                     />
//                     <input
//                         placeholder='Age'
//                         type="text"
//                         name="age"
//                         value={this.state.age}
//                         onChange={this.handleChanges}
//                     />
//                     <input
//                         placeholder='Height'
//                         type="text"
//                         name="height"
//                         value={this.state.height}
//                         onChange={this.handleChanges}
//                     />
//                     <button>Add Smurf</button>
//                 </form>
//             </div>
//         )
//     }
// }

// export default SmurfForm;




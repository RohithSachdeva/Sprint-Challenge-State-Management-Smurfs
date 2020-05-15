import React, { Component } from 'react';
import axios from 'axios';

class SmurfForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            age: '',
            height: ''
        }
    }
    handleChanges = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        axios
            .post('http://localhost:3333/smurfs', this.state)
            .then(res => {
                console.log(res)
                
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder='Name'
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChanges}
                    />
                    <input
                        placeholder='Age'
                        type="text"
                        name="age"
                        value={this.state.age}
                        onChange={this.handleChanges}
                    />
                    <input
                        placeholder='Height'
                        type="text"
                        name="height"
                        value={this.state.height}
                        onChange={this.handleChanges}
                    />
                    <button>Add Smurf</button>
                </form>
            </div>
        )
    }
}

export default SmurfForm;



//axios post request in the handle submit?  

// {
//     name: 'Brainey',
//     age: 200,
//     height: '5cm'
//   }


// class TodoForm extends React.Component {
//     

//     constructor() {
//       super();
//       this.state = {
//         todoText: "",
//       };
//     }
//    
//     handleChanges = e => {
//       this.setState({
//         todoText: e.target.value,
//       });
//     };

//     

//     handleSubmit = e => {
//       e.preventDefault();
//       this.props.addItem(this.state.todoText);
//       this.props.persistData(this.state.todoText);
//     };

//     render() {
//       return (
//         <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="item"
//             value={this.state.todoText}
//             onChange={this.handleChanges}
//           />
//           <button>Add Item</button>
//         </form>
//       );
//     }
//   }

//   export default TodoForm;
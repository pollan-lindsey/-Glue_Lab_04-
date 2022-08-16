import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';

export default class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
        
    }

    handleFirstName = (event) => {
        this.setState({firstName: event.target.value})
    }

    handleLastName = (event) => {
        this.setState({lastName: event.target.value})
    }

    handleEmail = (event) => {
        this.setState({email: event.target.value})
    }

    handlePassword = (event) => {
        this.setState({password: event.target.value})
        // preventDefault()
    }

    // //
    // handleSubmit = (event) => {
    //     event.preventDefault();
    //     this.props.updateState();
    //     this.setState({firstName: '', lastName: '', email: '', password: ''})
    // }

    render() {
        return (
           <div id='form'>
            <form onSubmit={Window.handleShow}>
                {/* handleShow is a function written in Window */}
                <label>
                    First Name:
                    <input type={'text'} value={this.state.firstName} onChange={this.handleFirstName} />
                </label>
                <label>
                    Last Name:
                    <input type={'text'} value={this.state.lastName} onChange={this.handleLastName} />
                </label>
                <label>
                    Email:
                    <input type={'email'} value={this.state.email} onChange={this.handleEmail} />
                </label>
                <label>
                    Password:
                    <input type={'password'} value={this.state.password} onChange={this.handlePassword} />
                </label>
                <Button variant="primary" type="submit"> Submit </Button>
            </form>
           </div> 
        )
  
    }
}
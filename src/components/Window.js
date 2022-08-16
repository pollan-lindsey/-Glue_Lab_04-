import React, {Component} from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default class Window extends Component{
    //set default state to not show
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
    }

    handleClose = () => {
        this.setState({show: false})
    }
    handleShow = () => {
        this.setState({show: true})
    }

    render() {
        return (
            <Modal show={this.state.show}> 
            <Modal.Header>
              <Modal.Title id="contained-modal-title-vcenter">
                Submitted!
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>  
        )
    }
}
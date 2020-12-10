import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalDelete(props){
    function getName(){
        if(!props.student )return"";
        return `${props.student.firstName} ${props.student.lastName}`
    }
    return(
        <Modal show={props.show}>
            <Modal.Header>
                    <Modal.Title>
                        Delete student
                    </Modal.Title>   
                </Modal.Header>
                <Modal.Body>
                    <h4>Are you sure?</h4>
                    <p>
                        The information about student{getName()}
                        will be deleted and cannot be recovered.
                    </p> 
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={props.onDelete}>Delete</Button>
                    <Button onClick={props.onHide}>Cancel</Button> 
            </Modal.Footer>   
        </Modal>           
    )
}

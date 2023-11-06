import React from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

export default function ModalRegistro(
    props: {
        tituloModal: string,
        modalActivo: boolean,
        toggleModal: any,
        children: any
    }
) {
    return(
        <Modal isOpen={props.modalActivo} toggle={props.toggleModal}>
            <ModalHeader toggle={props.toggleModal}>
                {props.tituloModal}
            </ModalHeader>

            <ModalBody>
                {props.children}
            </ModalBody>
        </Modal>
    );
};
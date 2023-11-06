import React from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

export default function ModalTabla(
    props: {
        tituloModal: string,
        tituloBotonOk: string,
        tituloBotonRechazo: string,
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

            <ModalFooter>
                <Button outline color="primary" onClick={props.toggleModal}>
                    {props.tituloBotonOk}
                </Button>

                <Button outline color="secondary" onClick={props.toggleModal}>
                    {props.tituloBotonRechazo}
                </Button>
            </ModalFooter>
        </Modal>
    );
};
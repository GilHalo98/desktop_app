import React from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

export default function ModalRemoverRegistro(
    props: {
        tituloModal: string,
        tituloBotonOk: string,
        tituloBotonRechazo: string,
        modalActivo: boolean,
        toggleModal: Function,
        funcionOk: Function,
        children: any
    }
) {
    return(
        <Modal isOpen={props.modalActivo} toggle={() => {
            props.toggleModal();
        }}>
            <ModalHeader toggle={() => {
                props.toggleModal();
            }}>
                {props.tituloModal}
            </ModalHeader>

            <ModalBody>
                {props.children}
            </ModalBody>

            <ModalFooter>
                <Button outline color="primary" onClick={() => {
                    props.funcionOk();
                }}>
                    {props.tituloBotonOk}
                </Button>

                <Button outline color="secondary" onClick={() => {
                    props.toggleModal();
                }}>
                    {props.tituloBotonRechazo}
                </Button>
            </ModalFooter>
        </Modal>
    );
};
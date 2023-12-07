'use client'

import React from 'react';

import {
    Button,
    Modal, ModalBody, ModalFooter, ModalHeader,
} from "reactstrap";

export default function ModalForm(
    props: any,
) {
    return(
        <Modal toggle={() => props.setModalActivo(!props.modalActivo)} isOpen={props.modalActivo}>
            <ModalHeader>
                Registro de Empleado
                <button aria-label="Close" className=" close" type="button" onClick={props.onAbortar}>
                    <span aria-hidden={true}>×</span>
                </button>
            </ModalHeader>

            <ModalBody>
                {props.children}
            </ModalBody>

            <ModalFooter>
                <Button color="danger" type="button" onClick={props.onAbortar}>
                    Abortar
                </Button>
            </ModalFooter>
        </Modal>
    );
};
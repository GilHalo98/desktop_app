import React from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import MenuOpcionesLista from '../menus/menuOpcionesLista';

export default function ModalOpcionesLista(
    props: {
        tituloModal: string,
        tituloBotonOk: string,
        tituloBotonRechazo: string,
        modalActivo: boolean,
        toggleModal: Function,
        setTiempoRefresh: Function,
    }
) {
    // Hooks de las opciones de la tabla.
    const [tiempoRefresh, setTiempoRefresh] = React.useState(1);

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
                <MenuOpcionesLista
                    tiempoRefresh={tiempoRefresh}
                    setTiempoRefresh={setTiempoRefresh}
                />
            </ModalBody>

            <ModalFooter>
                <Button outline color="primary" onClick={() => {
                        props.toggleModal();
                        props.setTiempoRefresh(tiempoRefresh);
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
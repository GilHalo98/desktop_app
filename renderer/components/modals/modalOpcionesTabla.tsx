import React from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';

import MenuOpcionesTabla from '../menus/menuOpcionesTabla';

export default function ModalOpcionesTabla(
    props: {
        tituloModal: string,
        tituloBotonOk: string,
        tituloBotonRechazo: string,
        modalActivo: boolean,
        toggleModal: Function,
        setRegistrosPorPagina: Function,
        setOpcionesTabla: Function
        setTiempoRefresh: Function,
        ocultarOpcionesTabla: boolean
    }
) {
    // Hooks de las opciones de la tabla.
    const [elementos, setElementos] = React.useState(12);
    const [opcionesTabla, setOpcionesTabla] = React.useState(false);
    const [tiempoRefresh, setTiempoRefresh] = React.useState(60);

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
                <MenuOpcionesTabla
                    registrosPorPagina={elementos}
                    setRegistrosPorPagina={setElementos}
                    opcionesTabla={opcionesTabla}
                    setOpcionesTabla={setOpcionesTabla}
                    tiempoRefresh={tiempoRefresh}
                    setTiempoRefresh={setTiempoRefresh}
                    ocultarOpcionesTabla={props.ocultarOpcionesTabla}
                />
            </ModalBody>

            <ModalFooter>
                <Button outline color="primary" onClick={() => {
                        props.toggleModal();
                        props.setRegistrosPorPagina(elementos);
                        props.setOpcionesTabla(opcionesTabla);
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
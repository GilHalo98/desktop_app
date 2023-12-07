import React from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Container, Row, Col,
    Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function ModalRegistroTipoReporte(
    props: {
        tituloModal: string,
        modalActivo: boolean,
        toggleModal: Function,
        funcionRegistrar: Function
    }
) {
    const [clasificacionReporte, setClasificacionReporte] = React.useState('');
    const [descripcionTipoReporte, setDescripcionTipoReporte] = React.useState('');

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
                <Form>
                    <FormGroup>
                        <Label for="clasificacionTipoReporte">
                            Descripcion del tipo de reporte
                        </Label>

                        <Input
                            id="clasificacionTipoReporte"
                            name="campoClasificacion"
                            type="text"
                            onChange={(input) => {
                                setClasificacionReporte(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="descripcionTipoReporte">
                        Descripcion del tipo de reporte
                        </Label>

                        <Input
                            id="descripcionTipoReporte"
                            name="campoDescripcionTipoReporte"
                            type="text"
                            onChange={(input) => {
                                setDescripcionTipoReporte(input.target.value);
                            }}
                        />
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionRegistrar(
                            clasificacionReporte,
                            descripcionTipoReporte
                        );
                    }}
                >
                    Registrar
                </Button>
            </ModalFooter>
        </Modal>
    );
};
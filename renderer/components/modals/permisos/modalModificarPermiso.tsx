import React from 'react';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Container, Row, Col,
    Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function ModalModificarPermiso(
    props: {
        tituloModal: string,
        modalActivo: boolean,
        toggleModal: Function,
        funcionRegistrar: Function
    }
) {
    const [descripcionPermiso, setDescripcionPermiso] = React.useState('');
    const [accesos, setAccesos] = React.useState(0);

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
                        <Label for="descripcionPermiso">
                            Descripcion del permiso
                        </Label>

                        <Input
                            id="descripcionPermiso"
                            name="campoDescripcionPermiso"
                            type="text"
                            onChange={(input) => {
                                setDescripcionPermiso(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="accesosPermiso">
                            Accesos del permiso
                        </Label>

                        <Input
                            id="accesosPermiso"
                            name="campoAccesosPermiso"
                            type="number"
                            onChange={(input) => {
                                setAccesos(parseInt(input.target.value));
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
                            descripcionPermiso,
                            accesos
                        );
                    }}
                >
                    Modificar
                </Button>
            </ModalFooter>
        </Modal>
    );
};
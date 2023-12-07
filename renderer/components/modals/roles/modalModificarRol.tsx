import React from 'react';

import { ConsultaPermiso } from '../../../utils/API/interface/permiso';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Container, Row, Col,
    Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function ModalRegistroRol(
    props: {
        tituloModal: string,
        modalActivo: boolean,
        toggleModal: Function,
        funcionModificar: Function
    }
) {
    const [rolTrabajador, setRolTrabajador] = React.useState('');
    const [descripcionRol, setDescripcionRol] = React.useState('');
    const [idPermisoVinculados, setIdPermisoVinculados] = React.useState(0);

    const [listaPermisos, setListaPermisos] = React.useState([]);

    React.useEffect(() => {
        ConsultaPermiso(
            null,
            null,
            null,
            null,
            setListaPermisos,
            () => {}
        );
    }, []);

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
                        <Label for="nombreRol">
                            Nombre del Rol
                        </Label>

                        <Input
                            id="nombreRol"
                            name="campoNombreRol"
                            type="text"
                            onChange={(input) => {
                                setRolTrabajador(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="descripcionRol">
                            Descripción del Rol
                        </Label>

                        <Input
                            id="descripcionRol"
                            name="campoDescripcionRol"
                            type="text"
                            onChange={(input) => {
                                setDescripcionRol(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="permisoRol">
                            Accesos del Rol
                        </Label>

                        <Input
                            id="permisoRol"
                            type="select"
                            onChange={(input) => {
                                if(input.target.value) {
                                    setIdPermisoVinculados(parseInt(input.target.value));
                                }
                            }}
                        >
                            <option value={undefined}>
                                Default
                            </option>

                            {listaPermisos.map((registro: any) => {
                                return(
                                    <option value={registro.id}>
                                        {registro.descripcionPermiso}
                                    </option>
                                );
                            })}
                        </Input>
                    </FormGroup>
                </Form>
            </ModalBody>

            <ModalFooter>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionModificar(
                            rolTrabajador,
                            descripcionRol,
                            idPermisoVinculados
                        );
                    }}
                >
                    modificar
                </Button>
            </ModalFooter>
        </Modal>
    );
};
import React from 'react';

import { ConsultaRol } from '../../../utils/API/interface/rol';

import {
    Button,
    Modal, ModalHeader, ModalBody, ModalFooter,
    Container, Row, Col,
    Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function ModalRegistroEmpleado(
    props: {
        tituloModal: string,
        modalActivo: boolean,
        toggleModal: Function,
        funcionRegistrar: Function
    }
) {
    const [nombres, setNombres] = React.useState('');
    const [apellidoPaterno, setApellidoPaterno] = React.useState('');
    const [apellidoMaterno, setApellidoMaterno] = React.useState('');
    const [numeroTelefonico, setNumeroTelefonico] = React.useState('');
    const [fechaNacimiento, setFechaNacimiento] = React.useState('');
    const [idRolVinculado, setIdRolVinculado] = React.useState(0);

    const [listaRoles, setListaRoles] = React.useState([]);

    React.useEffect(() => {
        ConsultaRol(
            null,
            null,
            null,
            null,
            null,
            null,
            setListaRoles,
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
                        <Label for="nombreEmpleado">
                            Nombres del empleado
                        </Label>

                        <Input
                            id="nombreEmpleado"
                            name="campoNombreEmpleado"
                            type="text"
                            onChange={(input) => {
                                setNombres(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="apellidoPaternoEmpelado">
                            Apellido paterno del empleado
                        </Label>

                        <Input
                            id="apellidoPaternoEmpelado"
                            name="campoApellidoPaternoEmpelado"
                            type="text"
                            onChange={(input) => {
                                setApellidoPaterno(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="apellidoMaternoEmpelado">
                            Apellido paterno del empleado
                        </Label>

                        <Input
                            id="apellidoMaternoEmpelado"
                            name="campoApellidoMaternoEmpelado"
                            type="text"
                            onChange={(input) => {
                                setApellidoMaterno(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="numeroEmpleado">
                            Numero telefónico del empleado
                        </Label>

                        <Input
                            id="numeroEmpleado"
                            name="campoNumeroEmpleado"
                            type="tel"
                            onChange={(input) => {
                                setNumeroTelefonico(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="nacimientoEmpleado">
                            Fecha de nacimiento del empleado
                        </Label>

                        <Input
                            id="nacimientoEmpleado"
                            name="campoNacimientoEmpleado"
                            type="date"
                            onChange={(input) => {
                                setFechaNacimiento(input.target.value);
                            }}
                        />
                    </FormGroup>

                    <FormGroup>
                        <Label for="rolEmpleado">
                            Rol del empleado
                        </Label>

                        <Input
                            id="rolEmpleado"
                            type="select"
                            onChange={(input) => {
                                if(input.target.value) {
                                    setIdRolVinculado(parseInt(input.target.value));
                                }
                            }}
                        >
                            {listaRoles.map((registro: any) => {
                                return(
                                    <option value={registro.id}>
                                        {registro.rolTrabajador}
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
                        props.funcionRegistrar(
                            nombres,
                            apellidoPaterno,
                            apellidoMaterno,
                            numeroTelefonico,
                            fechaNacimiento,
                            idRolVinculado
                        );
                    }}
                >
                    Registrar
                </Button>
            </ModalFooter>
        </Modal>
    );
};
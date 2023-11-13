import React from 'react';
import {
    Container, Row, Col,
    Button, Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function MenuModificarRegistro(
    props: {
        funcionModificarRegistro: Function
    }
) {
    const [descripcionEstadoStatus, setNombreEstado] = React.useState('');

    return(
        <Form>
            <FormGroup>
                <Label for="descripcionEstadoStatus">
                    Descripcion del estado de Status
                </Label>

                <Input
                    id="descripcionEstadoStatus"
                    name="campoDescripcionEstadoStatus"
                    type="text"
                    onChange={(input) => {
                        setNombreEstado(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionModificarRegistro(
                            descripcionEstadoStatus
                        );
                    }}
                >
                    Modificar
                </Button>
            </FormGroup>
        </Form>
    );
};
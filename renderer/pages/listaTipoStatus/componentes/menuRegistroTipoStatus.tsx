import React from 'react';
import {
    Container, Row, Col,
    Button, Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function MenuRegistroTipoStatus(
    props: {
        funcionRegistrar: Function
    }
) {
    const [descripcionTipoStatus, setDescripcionTipoStatus] = React.useState('');

    return(
        <Form>
            <FormGroup>
                <Label for="descripcionTipoStatus">
                    Descripcion del tipo de Status
                </Label>

                <Input
                    id="descripcionTipoStatus"
                    name="campoDescripcionTipoStatus"
                    type="text"
                    onChange={(input) => {
                        setDescripcionTipoStatus(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionRegistrar(
                            descripcionTipoStatus
                        );
                    }}
                >
                    Registrar
                </Button>
            </FormGroup>
        </Form>
    );
};
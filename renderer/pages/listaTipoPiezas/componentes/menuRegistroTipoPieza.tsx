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
    const [descripcionTipoPieza, setDescripcionTipoPieza] = React.useState('');

    return(
        <Form>
            <FormGroup>
                <Label for="descripcionTipoPieza">
                    Descripcion del tipo de Status
                </Label>

                <Input
                    id="descripcionTipoPieza"
                    name="campoDescripcionTipoStatus"
                    type="text"
                    onChange={(input) => {
                        setDescripcionTipoPieza(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionRegistrar(
                            descripcionTipoPieza
                        );
                    }}
                >
                    Registrar
                </Button>
            </FormGroup>
        </Form>
    );
};
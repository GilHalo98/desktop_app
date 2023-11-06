import React from 'react';
import {
    Container, Row, Col,
    Button, Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function MenuRegistroTipoReporte(
    props: {
        funcionRegistrar: Function
    }
) {
    const [descripcionTipoReporte, setDescripcionTipoReporte] = React.useState('');

    return(
        <Form>
            <FormGroup>
                <Label for="descripcionTipoReporte">
                    Descripcion del tipo de Reporte
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

            <FormGroup>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionRegistrar(
                            descripcionTipoReporte
                        );
                    }}
                >
                    Registrar
                </Button>
            </FormGroup>
        </Form>
    );
};
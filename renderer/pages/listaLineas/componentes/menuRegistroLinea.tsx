import React from 'react';
import {
    Container, Row, Col,
    Button, Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function MenuRegistroLinea(
    props: {
        funcionRegistrar: Function
    }
) {
    const [nombreLinea, setNombreLinea] = React.useState('');
    const [descripcionLinea, setDescripcion] = React.useState('');

    return(
        <Form>
            <FormGroup>
                <Label for="nombreLinea">
                    Nombre de la Linea
                </Label>

                <Input
                    id="nombreLinea"
                    name="campoNombreLinea"
                    type="text"
                    onChange={(input) => {
                        setNombreLinea(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="descripcionLinea">
                    Descripcion de la Linea
                </Label>

                <Input
                    id="descripcionLinea"
                    name="campoDescripcionLinea"
                    type="text"
                    onChange={(input) => {
                        setDescripcion(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionRegistrar(
                            nombreLinea,
                            descripcionLinea
                        );
                    }}
                >
                    Registrar
                </Button>
            </FormGroup>
        </Form>
    );
};
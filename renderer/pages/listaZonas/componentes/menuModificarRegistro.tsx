import React from 'react';
import {
    Container, Row, Col,
    Button, Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function MenuModificarRegistro(
    props: {
        funcionModificarRegistro: Function,
        setLineaPerteneciente: Function,
        listaLineasPertenecientes: Array<Object>
    }
) {
    const [nombreZona, setNombreZona] = React.useState('');
    const [descripcionZona, setDescripcionZona] = React.useState('');
    const [idLineaPerteneciente, setIdLineaPerteneciente] = React.useState('');

    return(
        <Form>
            <FormGroup>
                <Label for="nombreZona">
                    Nombre de la Zona
                </Label>

                <Input
                    id="nombreZona"
                    name="campoNombreZona"
                    type="text"
                    onChange={(input) => {
                        setNombreZona(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="descripcionZona">
                    Descripcion de la Zona
                </Label>

                <Input
                    id="descripcionZona"
                    name="campoDescripcionZona"
                    type="text"
                    onChange={(input) => {
                        setDescripcionZona(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="lineaPertenecienteZona">
                    Linea perteneciente de Zona
                </Label>

                <Input
                    id="lineaPertenecienteZona"
                    type="select"
                    onChange={(input) => {
                        setIdLineaPerteneciente(input.target.value);
                    }}
                >
                    <option value={null}>
                        Default
                    </option>

                    {props.listaLineasPertenecientes.map((registro: {
                        id: number,
                        nombreLinea: string
                    }) => {
                        return(
                            <option value={registro.id}>
                                {registro.nombreLinea}
                            </option>
                        );
                    })}
                </Input>
            </FormGroup>

            <FormGroup>
                <Button
                    outline
                    color="primary"
                    onClick={() => {
                        props.funcionModificarRegistro(
                            nombreZona,
                            descripcionZona,
                            idLineaPerteneciente
                        );
                    }}
                >
                    Guardar Cambios
                </Button>
            </FormGroup>
        </Form>
    );
};
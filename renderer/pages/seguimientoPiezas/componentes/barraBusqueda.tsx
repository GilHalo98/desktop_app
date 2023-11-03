import React from 'react';

import {
    Input, Label, Button, Collapse,
    Container, Row, Col,
} from 'reactstrap';

import ResultadoBusquedaPieza from './resultadoBusquedaPieza';

export default function BarraBusqueda(
    props: any
) {
    const [mostrarInput, setMostrarInput] = React.useState(false);

    return(
        <Container>
            <Row>
                <Col>
                    <Button
                        color='primary'
                        outline
                        block
                        active={mostrarInput}
                        onClick={() => {
                            setMostrarInput(!mostrarInput);
                        }}
                    >
                        Buscar Pieza
                    </Button>
                </Col>
            </Row>

            <br/>

            <Collapse isOpen={mostrarInput}>
                <Row>
                    <Col>
                        <Input
                            id="dataMatrix"
                            placeholder="Datamatrix de la pieza"
                            type="text"
                            onChange={(input) => {
                                props.setDataMatrix(input.target.value);
                            }}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <ResultadoBusquedaPieza
                            cabeceras={props.cabeceras}
                            registros={props.registros}
                        />
                    </Col>
                </Row>
            </Collapse>
        </Container>
    );
};
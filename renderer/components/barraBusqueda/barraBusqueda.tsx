import React from 'react';

import {
    Button, Collapse,
    Container, Row, Col,
    Card, CardBody
} from 'reactstrap';

export default function BarraBusqueda(
    props: {
        tituloBoton: string,
        children: any
    }
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
                        {props.tituloBoton}
                    </Button>
                </Col>
            </Row>

            <Collapse isOpen={mostrarInput}>
                <br/>
                {props.children}
                <br/>
            </Collapse>
        </Container>
    );
};
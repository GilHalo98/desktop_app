import {
    Container, Row, Col,
    Input, Label
} from 'reactstrap';

export default function InputBusqueda(
    props: any
) {
    return(
        <Container>
            <Row>
                <Col>
                    <Input
                        id="descripcionTipoPieza"
                        placeholder="Nombre del tipo de pieza"
                        type="text"
                        onChange={(input) => {
                            props.setDescripcionTipoPieza(input.target.value);
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
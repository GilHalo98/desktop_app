import {
    Container, Row, Col,
    Input, Label
} from 'reactstrap';

export default function InputBusqueda(
    props: {
        setNombreEstado: Function
    }
) {
    return(
        <Container>
            <Row>
                <Col>
                    <Input
                        id="descripcionEstadoStatus"
                        placeholder="Nombre del estado de status"
                        type="text"
                        onChange={(input) => {
                            props.setNombreEstado(input.target.value);
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
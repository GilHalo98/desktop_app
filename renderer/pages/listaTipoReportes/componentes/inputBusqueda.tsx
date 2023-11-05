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
                        id="descripcionTipoReporte"
                        placeholder="Nombre del tipo de reporte"
                        type="text"
                        onChange={(input) => {
                            props.setDescripcionTipoReporte(input.target.value);
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
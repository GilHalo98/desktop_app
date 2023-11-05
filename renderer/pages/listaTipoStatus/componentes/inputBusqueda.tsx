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
                        id="descripcionTipoStatus"
                        placeholder="Nombre del tipo de status"
                        type="text"
                        onChange={(input) => {
                            props.setDescripcionTipoStatus(input.target.value);
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
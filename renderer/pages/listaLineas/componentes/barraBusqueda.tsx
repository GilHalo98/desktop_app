import {
    Container, Row, Col,
    Input, Label
} from 'reactstrap';

export default function BarraBusqueda(
    props: any
) {
    return(
        <Container>
            <Row>
                <Col>
                    <Input
                        id="nombreLinea"
                        placeholder="Nombre de la linea"
                        type="text"
                        onChange={(input) => {
                            props.setNombreLinea(input.target.value);
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
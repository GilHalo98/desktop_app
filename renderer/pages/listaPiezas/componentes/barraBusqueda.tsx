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
                        id="dataMatrix"
                        placeholder="Data matrix de la pieza"
                        type="text"
                        onChange={(input) => {
                            props.setDataMatrix(input.target.value);
                        }}
                    />
                </Col>

                <Col>
                    <Input
                        id="tipoPieza"
                        type="select"
                        onChange={(input) => {
                            props.setTipoPieza(input.target.value);
                        }}
                    >
                        <option value={''}>
                            Todos
                        </option>

                        {props.listaTiposPieza.map((registro: any) => {
                            return(
                                <option value={registro.id}>
                                    {registro.descripcionTipoPieza}
                                </option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
        </Container>
    );
};
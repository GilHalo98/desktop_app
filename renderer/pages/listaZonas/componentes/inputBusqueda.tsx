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
                        id="nombreZona"
                        placeholder="Nombre de zona"
                        type="text"
                        onChange={(input) => {
                            props.setNombreZona(input.target.value);
                        }}
                    />
                </Col>

                <Col>
                    <Input
                        id="lineaPerteneciente"
                        type="select"
                        onChange={(input) => {
                            props.setLineaPerteneciente(input.target.value);
                        }}
                    >
                        <option value={''}>
                            Todas
                        </option>

                        {props.listaLineasPertenecientes.map((registro: any) => {
                            return(
                                <option value={registro.id}>
                                    {registro.nombreLinea}
                                </option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
        </Container>
    );
};
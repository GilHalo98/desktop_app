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
                        id="estadoStatus"
                        type="select"
                        onChange={(input) => {
                            props.setEstadoStatus(input.target.value);
                        }}
                    >
                        <option value={''}>
                            Todos
                        </option>

                        {props.listaEstadosStatus.map((registro: any) => {
                            return(
                                <option value={registro.id}>
                                    {registro.nombreEstado}
                                </option>
                            );
                        })}
                    </Input>
                </Col>

                <Col>
                    <Input
                        id="tipoStatus"
                        type="select"
                        onChange={(input) => {
                            props.setTipoStatus(input.target.value);
                        }}
                    >
                        <option value={''}>
                            Todos
                        </option>

                        {props.listaTiposStatus.map((registro: any) => {
                            return(
                                <option value={registro.id}>
                                    {registro.descripcionTipoStatus}
                                </option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
        </Container>
    );
};
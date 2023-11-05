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
                        id="tipoReporte"
                        type="select"
                        onChange={(input) => {
                            props.setTipoReporte(input.target.value);
                        }}
                    >
                        <option value={''}>
                            Todos
                        </option>

                        {props.listaTiposReporte.map((registro: any) => {
                            return(
                                <option value={registro.id}>
                                    {registro.descripcionTipoReporte}
                                </option>
                            );
                        })}
                    </Input>
                </Col>

                <Col>
                    <Input
                        id="estacionvinculada"
                        type="select"
                        onChange={(input) => {
                            props.setZona(input.target.value);
                        }}
                    >
                        <option value={''}>
                            Todos
                        </option>

                        {props.listaZonas.map((registro: any) => {
                            return(
                                <option value={registro.id}>
                                    {registro.nombreZona}
                                </option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
        </Container>
    );
};
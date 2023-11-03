import {
    Container, Row, Col,
    Nav, NavItem, NavLink,
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader,
    Input
} from 'reactstrap';

export default function TabLineas(
    props: any
) {
    return(
        <Card color='dark'>
            <CardHeader className='text-white'>
                {props.titulo}
            </CardHeader>

            <CardBody>
                <Container>
                    <Row>
                        <Col>
                            <Nav fill pills>
                                {props.listaLineas.map((registro: any) => {
                                    return(
                                        <NavItem>
                                            <NavLink
                                                onClick={() => {
                                                    props.setLinea(registro.id);
                                                    props.resetPaginaActual(1);
                                                    props.setOffset(0);
                                                }}
                                                active={
                                                    props.lineaActiva == registro.id ? true : false
                                                }
                                                href="#"
                                            >
                                                {registro.nombreLinea}
                                            </NavLink>
                                        </NavItem>
                                    );
                                })}
                            </Nav>
                        </Col>
                    </Row>

                    <br/>

                    <Row>
                        <Col>
                            <Input
                                id="dataMatrix"
                                placeholder="Datamatrix de la pieza"
                                type="text"
                                onChange={(input) => {
                                    props.setDataMatrix(input.target.value);
                                }}
                            />
                        </Col>
                    </Row>
                </Container>

            </CardBody>
        </Card>
    );
};
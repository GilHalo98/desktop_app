import {
    Container, Row, Col,
    Nav, NavItem, NavLink,
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader,
} from 'reactstrap';
import BarraBusqueda from './barraBusqueda';

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

                    <BarraBusqueda
                        setDataMatrix={props.setDataMatrix}
                        cabeceras={props.cabeceras}
                        registros={props.registros}
                    />
                </Container>

            </CardBody>
        </Card>
    );
};
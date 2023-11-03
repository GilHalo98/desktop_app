import {
    Container, Row, Col,
    Nav, NavItem, NavLink,
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader
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
            </CardBody>
        </Card>
    );
};
import {
    Table, Button,
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader,
} from 'reactstrap';
import Paginacion from '../paginacion/paginacion';

export default function Tabla(
    props: any
) {
    function thOpciones(activarOpciones: boolean) {
        if(activarOpciones) {
            return(
                <th>Opciones</th>
            );
        }
    };

    function tdOpciones(activarOpciones: boolean, idRegistro: number) {
        if(activarOpciones) {
            return(
                <td>
                    <Container>
                        <Row>
                            <Col sm={6}>
                                <Button color='warning'>
                                    M
                                </Button>
                            </Col>

                            <Col sm={6}>
                                <Button color='danger'>
                                    R
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </td>
            );
        }
    };

    return(
        <Card color='dark'>
            <CardHeader className='text-white'>
                <Container>
                    <Row>
                        <Col sm='9'>
                            <h1>{props.titulo}</h1>
                        </Col>

                        <Col>
                            <Button block size="sm" color='primary'>
                                Agregar Registro
                            </Button>
                        </Col>

                        <Col>
                            <Button block size="sm" color='warning'>
                                Opciones
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </CardHeader>

            <CardBody>
                <CardTitle>
                    {props.children}
                </CardTitle>

                <Table hover dark responsive>
                    <thead>
                        <tr key="header">
                            {props.cabeceras.map((cabecera: any) => {
                                return(
                                    <th>
                                        {cabecera}
                                    </th>
                                );
                            })}

                            {thOpciones(props.mostrarOpciones)}
                        </tr>
                    </thead>

                    <tbody>
                        {props.registros.map((registro: any) => {
                            return(
                                <tr key={registro.metadata.id}>
                                    {registro.data.map((dato: any) => {
                                        return(
                                            <td>
                                                {dato}
                                            </td>
                                        );
                                    })}
                                    {tdOpciones(props.mostrarOpciones, 0)}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <Paginacion
                    paginaActual={props.paginaActual}
                    offset={props.offset}
                    elementos={props.elementos}
                    setPaginaActual={props.setPaginaActual}
                    setOffset={props.setOffset}
                    totalPaginas={props.totalPaginas}
                />
            </CardBody>
        </Card>
    );
};
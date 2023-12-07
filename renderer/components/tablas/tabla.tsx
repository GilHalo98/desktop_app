'use client'

// React.
import React from 'react';

// Componentes de reactstrap.
import {
    Table, Button,
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, List,
} from 'reactstrap';

// Paginacion de la tabla.
import Paginacion from '../paginacion/paginacion';

// Funcionalidad de la tabla.
import {
    thOpciones, tdOpciones, mostrarAgregarRegistro
} from './logic/columnaOpciones';

export default function Tabla(
    props: any
) {
    return(
        <Card color='dark'>
            <CardHeader className='text-white'>
                <Container>
                    <Row>
                        <Col sm='9'>
                            {props.titulo}
                        </Col>

                        {mostrarAgregarRegistro(
                            props.ocultarBotonRegistro,
                            props.estadoModalAddRegistro,
                            props.toggleModalAddRegistro
                        )}

                        <Col>
                            <Button
                                block
                                outline
                                size="sm"
                                color='warning'
                                active={props.estadoModalOpciones}
                                onClick={props.toggleModalOpciones}
                            >
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
                            {props.cabeceras.map((cabecera: string) => {
                                return(
                                    <th key={cabecera}>
                                        {cabecera}
                                    </th>
                                );
                            })}

                            {thOpciones(props.mostrarOpciones)}
                        </tr>
                    </thead>

                    <tbody>
                        {props.registros.map((registro: any) => {
                            const keyTR = registro.metadata.id;

                            return(
                                <tr key={keyTR}>
                                    {registro.data.map((dato: any, index: number) => {
                                        const keyTD = registro.metadata.id + '-' + props.cabeceras[index];

                                        return(
                                            <td key={keyTD}>
                                                {dato}
                                            </td>
                                        );
                                    })}

                                    {tdOpciones(
                                        props.mostrarOpciones,
                                        parseInt(registro.metadata.id),
                                        props.toggleModalModificarRegistro,
                                        props.toggleModalRemoverRegistro
                                    )}
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
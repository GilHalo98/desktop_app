'use client'

// React.
import React from 'react';

// Componentes de reactstrap.
import {
    Table, Button,
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader, List,
} from 'reactstrap';

export default function Lista(
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

                        <Col>
                            <Button
                                block
                                outline
                                size="sm"
                                color='warning'
                                active={props.estadoModalOpciones}
                                onClick={() => {
                                    props.toggleModalOpciones();
                                }}
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
                        </tr>
                    </thead>

                    <tbody>
                        {props.registros.map((registro: any) => {
                            const keyTR = registro.metadata.id;

                            return(
                                <tr key={keyTR} className={props.seleccionColorFila(registro.metadata)}>
                                    {registro.data.map((dato: any, index: number) => {
                                        const keyTD = registro.metadata.id + '-' + props.cabeceras[index];

                                        return(
                                            <td key={keyTD}>
                                                {dato}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>
            </CardBody>
        </Card>
    );
};
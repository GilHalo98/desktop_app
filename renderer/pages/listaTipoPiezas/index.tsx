import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import { getTiposPieza } from './logic/query';
import BarraBusqueda from './componentes/barraBusqueda';

export default function ListaTipoPiezasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [descripcionTipoPieza, setDescripcionTipoPieza] = React.useState('');

    // Declaramos el useEffect de react para actualizar el contenido de la vista.
    React.useEffect(() => {
        getTiposPieza(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            descripcionTipoPieza
        );
    }, [paginaActual, descripcionTipoPieza]);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={8} />

                <Container fluid>
                    <br/>
                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de tipos de piezas'}
                                cabeceras={[
                                    'ID',
                                    'Nombre del tipo de pieza',
                                    'Fecha de registro',
                                    'Última modificación en'
                                ]}
                                registros={formatearDatos(listaRegistros)}
                                paginaActual={paginaActual}
                                offset={offset}
                                elementos={elementos}
                                setPaginaActual={setPaginaActual}
                                setOffset={setOffset}
                                totalPaginas={totalPaginas}
                            >
                                <BarraBusqueda
                                    setDescripcionTipoPieza={setDescripcionTipoPieza}
                                />
                            </Tabla>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

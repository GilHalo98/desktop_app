import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import { getTiposStatus } from './logic/query';
import BarraBusqueda from './componentes/barraBusqueda';

export default function ListaTipoStatusPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [descripcionTipoStatus, setDescripcionTipoStatus] = React.useState('');

    // Declaramos el useEffect de react para actualizar el contenido de la vista.
    React.useEffect(() => {
        getTiposStatus(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            descripcionTipoStatus
        );
    }, [paginaActual, descripcionTipoStatus]);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={7} />

                <Container fluid>
                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de tipos de status'}
                                cabeceras={[
                                    'ID',
                                    'Nombre del tipo de status',
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
                                    setDescripcionTipoStatus={setDescripcionTipoStatus}
                                />
                            </Tabla>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

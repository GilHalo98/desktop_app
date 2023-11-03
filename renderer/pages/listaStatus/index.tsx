import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardText
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';
import BarraBusqueda from './componentes/barraBusqueda';

import { formatearDatos } from './logic/formatearDatos';
import { getStatus, getTipoStatus, getEstadosStatus } from './logic/query';

export default function ListaLineasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1)

    const [dataMatrix, setDataMatrix] = React.useState('');
    const [estadoStatus, setEstadoStatus] = React.useState('');
    const [listaEstadosStatus, setListaEstadosStatus] = React.useState([]);
    const [tipoStatus, setTipoStatus] = React.useState('');
    const [listaTiposStatus, setListaTiposStatus] = React.useState([]);

    // Declaramos el useEffect de react para actualizar
    // el contenido de la vista.
    React.useEffect(() => {
        getStatus(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            dataMatrix,
            estadoStatus,
            tipoStatus
        );
    }, [paginaActual, dataMatrix, estadoStatus, tipoStatus]);

    React.useEffect(() => {
        getTipoStatus(setListaTiposStatus);
        getEstadosStatus(setListaEstadosStatus);
    }, []);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={4} />

                <Container fluid>
                    <br/>

                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de status'}
                                cabeceras={[
                                    'ID',
                                    'Pieza perteneciente',
                                    'Tipo de status',
                                    'Estado del status',
                                    'Fecha de registro',
                                    'Última modificación en',
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
                                    setDataMatrix={setDataMatrix}
                                    setEstadoStatus={setEstadoStatus}
                                    setTipoStatus={setTipoStatus}
                                    listaEstadosStatus={listaEstadosStatus}
                                    listaTiposStatus={listaTiposStatus}
                                />
                            </Tabla>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

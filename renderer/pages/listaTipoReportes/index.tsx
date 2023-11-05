import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import { getTiposReporte } from './logic/query';
import InputBusqueda from './componentes/inputBusqueda';
import BarraBusqueda from '../../components/barraBusqueda/barraBusqueda';

export default function ListaTipoStatusPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [descripcionTipoReporte, setDescripcionTipoReporte] = React.useState('');

    // Declaramos el useEffect de react para actualizar el contenido de la vista.
    React.useEffect(() => {
        getTiposReporte(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            descripcionTipoReporte
        );
    }, [paginaActual, descripcionTipoReporte]);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={6} />

                <Container fluid>
                    <br/>
                    <Row>
                        <Col>
                            <Tabla
                            titulo={'Tabla de registros de tipos de reportes'}
                                cabeceras={[
                                    'ID',
                                    'Descripcion del tipo de reporte',
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
                                mostrarOpciones
                            >
                                <BarraBusqueda
                                    tituloBoton='Buscar Tipo de Reporte'
                                >

                                    <InputBusqueda
                                        setDescripcionTipoReporte={setDescripcionTipoReporte}
                                    />
                                </BarraBusqueda>
                            </Tabla>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

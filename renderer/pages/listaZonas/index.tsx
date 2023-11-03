import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import { getZonas, getLineas } from './logic/query';
import BarraBusqueda from './componentes/barraBusqueda';

export default function ListaZonaPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [nombreZona, setNombreZona] = React.useState(null);
    const [listaLineasPertenecientes, setListaLineasPertenecientes] = React.useState([]);
    const [lineaPerteneciente, setLineaPerteneciente] = React.useState(null);

    // Declaramos el useEffect de react para
    // actualizar el contenido de la vista.
    React.useEffect(() => {
        getZonas(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            nombreZona,
            lineaPerteneciente
        );
    }, [paginaActual, nombreZona, lineaPerteneciente]);

    React.useEffect(() => {
        getLineas(setListaLineasPertenecientes);
    }, []);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={2} />

                <Container fluid>
                    <br/>
                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de tipos de status'}
                                cabeceras={[
                                    'ID',
                                    'Nombre de zona',
                                    'Linea perteneciente',
                                    'Descripcion de zona',
                                    'Fecha de registro',
                                    'Última modificación en',
                                ]}
                                registros={
                                    formatearDatos(listaRegistros)
                                }
                                paginaActual={paginaActual}
                                offset={offset}
                                elementos={elementos}
                                setPaginaActual={setPaginaActual}
                                setOffset={setOffset}
                                totalPaginas={totalPaginas}
                            >
                                <BarraBusqueda
                                    setNombreZona={setNombreZona}
                                    setLineaPerteneciente={setLineaPerteneciente}
                                    listaLineasPertenecientes={listaLineasPertenecientes}
                                />
                            </Tabla>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

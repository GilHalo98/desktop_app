import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import { getReportes, getTiposReporte, getZonas } from './logic/query';
import BarraBusqueda from '../../components/barraBusqueda/barraBusqueda';
import InputBusqueda from './componentes/inputBusqueda';

export default function ListaLineasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    const [dataMatrix, setDataMatrix] = React.useState('');
    const [tipoReporte, setTipoReporte] = React.useState('');
    const [listaTiposReporte, setListaTiposReporte] = React.useState([]);
    const [zona, setZona] = React.useState('');
    const [listaZonas, setListaZonas] = React.useState([]);

    // Declaramos el useEffect de react para actualizar
    // el contenido de la vista.
    React.useEffect(() => {
        getReportes(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            dataMatrix,
            zona,
            tipoReporte
        );
    }, [paginaActual, dataMatrix, tipoReporte, zona]);

    React.useEffect(() => {
        getTiposReporte(setListaTiposReporte);
        getZonas(setListaZonas);
    }, []);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={3} />

                <Container fluid>
                    <br/>
                    
                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de Reportes'}
                                cabeceras={[
                                    'ID',
                                    'Descripcion del reporte',
                                    'Tipo de reporte',
                                    'Pieza perteneciente',
                                    'Estación de expedición del reporte',
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
                                mostrarOpciones
                            >
                                <BarraBusqueda
                                    tituloBoton='Buscar Reporte'
                                >
                                    <InputBusqueda
                                        setDataMatrix={setDataMatrix}
                                        listaTiposReporte={listaTiposReporte}
                                        setTipoReporte={setTipoReporte}
                                        listaZonas={listaZonas}
                                        setZona={setZona}
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

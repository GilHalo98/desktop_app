import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';
import {
    toggleModalRegistro,
    toggleModalOpciones,
    toggleModalRemoverRegistro,
    toggleModalModificarRegistro
} from './logic/toggleModals';
import { formatearDatos } from './logic/formatearDatos';
import { getReportes, getTiposReporte, getZonas } from './logic/query';
import BarraBusqueda from '../../components/barraBusqueda/barraBusqueda';
import InputBusqueda from './componentes/inputBusqueda';
import { funcionRefresh } from './logic/refresh';
import ModalTabla from '../../components/modals/modalTabla';
import MenuOpcionesTabla from '../../components/menus/menuOpcionesTabla';

export default function ListaLineasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [dataMatrix, setDataMatrix] = React.useState('');
    const [tipoReporte, setTipoReporte] = React.useState('');
    const [listaTiposReporte, setListaTiposReporte] = React.useState([]);
    const [zona, setZona] = React.useState('');
    const [listaZonas, setListaZonas] = React.useState([]);
    
    // Hooks de las opciones de la tabla.
    const [elementos, setElementos] = React.useState(12);
    const [opcionesTabla, setOpcionesTabla] = React.useState(false);
    const [refresh, setRefresh] = React.useState(true);
    const [tiempoRefresh, setTiempoRefresh] = React.useState(60);

    // Hooks del modal.
    const [estadoModalOpcionesTabla, setEstadoModalOpcionesTabla] = React.useState(false);
    const [estadoModalRegistroTabla, setEstadoModalRegistroTabla] = React.useState(false);
    const [estadoModalRemoverRegistro, setEstadoModalRemoverRegistro] = React.useState(false);
    const [estadoModalModificarRegistro, setEstadoModalModificarRegistro] = React.useState(false);

    // Hook del id del registro para operaciones
    const [idRegistroOperacion, setIdRegistroOperacion] = React.useState(null);

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
    }, [paginaActual, dataMatrix, tipoReporte, zona, elementos, refresh]);

    React.useEffect(() => {
        getTiposReporte(setListaTiposReporte);
        getZonas(setListaZonas);
    }, [refresh]);

        // La pagina se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

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
                                ocultarBotonRegistro
                                mostrarOpciones={opcionesTabla}
                                toggleModalOpciones={() => {
                                    toggleModalOpciones(
                                        estadoModalOpcionesTabla,
                                        setEstadoModalOpcionesTabla
                                    );
                                }}
                                estadoModalOpciones={estadoModalOpcionesTabla}
                                toggleModalAddRegistro={() => {
                                    toggleModalRegistro(
                                        estadoModalRegistroTabla,
                                        setEstadoModalRegistroTabla
                                    );
                                }}
                                estadoModalAddRegistro={estadoModalRegistroTabla}
                                toggleModalRemoverRegistro={(idRegistro: number) => {
                                    setIdRegistroOperacion(idRegistro);

                                    toggleModalRemoverRegistro(
                                        estadoModalRemoverRegistro,
                                        setEstadoModalRemoverRegistro
                                    );
                                }}
                                toggleModalModificarRegistro={(idRegistro: number) => {
                                    setIdRegistroOperacion(idRegistro);

                                    toggleModalModificarRegistro(
                                        estadoModalModificarRegistro,
                                        setEstadoModalModificarRegistro
                                    );
                                }}
                            >
                                <ModalTabla
                                    tituloModal='Opciones de Tabla'
                                    tituloBotonOk='Aceptar'
                                    tituloBotonRechazo='Rechazar'
                                    modalActivo={estadoModalOpcionesTabla}
                                    toggleModal={() => {
                                        toggleModalOpciones(
                                            estadoModalOpcionesTabla,
                                            setEstadoModalOpcionesTabla
                                        );
                                    }}
                                >
                                    <MenuOpcionesTabla
                                        registrosPorPagina={elementos}
                                        setRegistrosPorPagina={setElementos}
                                        opcionesTabla={opcionesTabla}
                                        setOpcionesTabla={setOpcionesTabla}
                                        tiempoRefresh={tiempoRefresh}
                                        setTiempoRefresh={setTiempoRefresh}
                                        ocultarOpcionesTabla={true}
                                    />
                                </ModalTabla>

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

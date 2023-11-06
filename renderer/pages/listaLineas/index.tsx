// Componentes de react.
import React from 'react';

// Componentes de next
import Head from 'next/head';

// Componentes de reacstrap
import {
    Input,
    Container, Row, Col,
} from 'reactstrap';

// Componentes globales
import Tabla from '../../components/tabla/tabla';
import SideBar from '../../components/sidebar/sidebar';
import ModalTabla from '../../components/modals/modalTabla';
import BarraBusqueda from '../../components/barraBusqueda/barraBusqueda';
import ModalRegistro from '../../components/modals/modalRegistro';
import MenuOpcionesTabla from '../../components/menus/menuOpcionesTabla';
import ModalRemoverRegistro from '../../components/modals/modarRemoverRegistro';

// Componentes locales.
import InputBusqueda from './componentes/inputBusqueda';
import MenuRegistroLinea from './componentes/menuRegistroLinea';

// Funciones de vista.
import { funcionRefresh } from './logic/refresh';
import { formatearDatos } from './logic/formatearDatos';
import {
    getLineas,
    registrarLinea,
    eliminarLinea,
    modificarLinea
} from './logic/query';
import { eliminarDato, modificarDato, registrarDato } from './logic/operacionesRegistros';
import {
    toggleModalRegistro,
    toggleModalOpciones,
    toggleModalRemoverRegistro,
    toggleModalModificarRegistro
} from './logic/toggleModals';
import MenuModificarRegistro from './componentes/menuModificarRegistro';

export default function ListaLineasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [nombreLinea, setNombreLinea] = React.useState('');
    
    // Hooks de las opciones de la tabla.
    const [elementos, setElementos] = React.useState(12);
    const [opcionesTabla, setOpcionesTabla] = React.useState(true);
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
        getLineas(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            nombreLinea
        );
    }, [paginaActual, nombreLinea, elementos, refresh]);

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
                <SideBar paginaActual={1} />

                <Container fluid>
                    <br/>

                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de lineas'}
                                cabeceras={[
                                    'ID',
                                    'Nombre de linea',
                                    'Descripcion de linea',
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
                                <ModalRemoverRegistro
                                    tituloModal={'Remover Registro con id ' + idRegistroOperacion}
                                    tituloBotonOk='Remover'
                                    tituloBotonRechazo='Cancelar'
                                    modalActivo={estadoModalRemoverRegistro}
                                    toggleModal={() => {
                                        toggleModalRemoverRegistro(
                                            estadoModalRemoverRegistro,
                                            setEstadoModalRemoverRegistro
                                        );
                                    }}
                                    funcionOk={() => {
                                        eliminarDato(
                                            refresh,
                                            idRegistroOperacion,
                                            setRefresh,
                                            eliminarLinea,
                                            () => {
                                                toggleModalRemoverRegistro(
                                                    estadoModalRemoverRegistro,
                                                    setEstadoModalRemoverRegistro
                                                );
                                            }
                                        );
                                    }}
                                >
                                    <h5>Desea eliminar el registro con id {idRegistroOperacion}?</h5>
                                </ModalRemoverRegistro>

                                <ModalRegistro
                                    tituloModal={
                                        'Modificar Registro '
                                        + idRegistroOperacion
                                        + ' de Lista'
                                    }
                                    modalActivo={estadoModalModificarRegistro}
                                    toggleModal={() => {
                                        toggleModalModificarRegistro(
                                            estadoModalModificarRegistro,
                                            setEstadoModalModificarRegistro
                                        );
                                    }}
                                >
                                    <MenuModificarRegistro
                                        funcionModificarRegistro={(
                                            nombreDeLinea: string,
                                            descripcionDeLinea: string
                                        ) => {
                                            modificarDato(
                                                refresh,
                                                idRegistroOperacion,
                                                nombreDeLinea,
                                                descripcionDeLinea,
                                                modificarLinea,
                                                setRefresh,
                                                () => {
                                                    toggleModalModificarRegistro(
                                                        estadoModalModificarRegistro,
                                                        setEstadoModalModificarRegistro
                                                    );
                                                }
                                            );
                                        }}
                                    />
                                </ModalRegistro>

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
                                        ocultarOpcionesTabla={false}
                                    />
                                </ModalTabla>

                                <ModalRegistro
                                    tituloModal='Agregar Registro de Lista'
                                    modalActivo={estadoModalRegistroTabla}
                                    toggleModal={() => {
                                        toggleModalRegistro(
                                            estadoModalRegistroTabla,
                                            setEstadoModalRegistroTabla
                                        );
                                    }}
                                >
                                    <MenuRegistroLinea
                                        funcionRegistrar={(
                                            nombreDeLinea: string,
                                            descripcionDeLinea: string
                                        ) => {
                                            registrarDato(
                                                refresh,
                                                nombreDeLinea,
                                                descripcionDeLinea,
                                                registrarLinea,
                                                setRefresh,
                                                () => {
                                                    toggleModalRegistro(
                                                        estadoModalRegistroTabla,
                                                        setEstadoModalRegistroTabla
                                                    );
                                                }
                                            );
                                        }}
                                    />
                                </ModalRegistro>

                                <BarraBusqueda
                                    tituloBoton='Buscar Linea'
                                >
                                    <InputBusqueda
                                        setNombreLinea={setNombreLinea}
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

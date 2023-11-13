import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import {
    ConsultaTipoStatus,
    RegistrarTipoStatus,
    ModificarTipoStatus,
    RemoverTipoStatus
} from '../../utils/API/interface/tipoStatus';
import {
    toggleModalRegistro,
    toggleModalOpciones,
    toggleModalRemoverRegistro,
    toggleModalModificarRegistro
} from './logic/toggleModals';
import InputBusqueda from './componentes/inputBusqueda';
import BarraBusqueda from '../../components/barraBusqueda/barraBusqueda';
import ModalTabla from '../../components/modals/modalTabla';
import MenuOpcionesTabla from '../../components/menus/menuOpcionesTabla';
import { funcionRefresh } from './logic/refresh';
import { eliminarDato, modificarDato, registrarDato } from './logic/operacionesRegistros';
import ModalRegistro from '../../components/modals/modalRegistro';
import MenuRegistroTipoStatus from './componentes/menuRegistroTipoStatus';
import ModalRemoverRegistro from '../../components/modals/modarRemoverRegistro';
import MenuModificarRegistro from './componentes/menuModificarRegistro';

export default function ListaTipoStatusPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [descripcionTipoStatus, setDescripcionTipoStatus] = React.useState('');
    
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

    // Declaramos el useEffect de react para actualizar el contenido de la vista.
    React.useEffect(() => {
        ConsultaTipoStatus(
            elementos,
            offset,
            descripcionTipoStatus,
            setListaRegistros,
            setTotalPaginas
        );
    }, [
        paginaActual,
        descripcionTipoStatus,
        refresh,
        elementos
    ]);

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
                <SideBar paginaActual={7} />

                <Container fluid>
                    <br/>
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
                                            RemoverTipoStatus,
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
                                            descripcionDeTipoStatus: string
                                        ) => {
                                            modificarDato(
                                                refresh,
                                                idRegistroOperacion,
                                                descripcionDeTipoStatus,
                                                ModificarTipoStatus,
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
                                    tituloModal='Agregar Registro de Zona'
                                    modalActivo={estadoModalRegistroTabla}
                                    toggleModal={() => {
                                        toggleModalRegistro(
                                            estadoModalRegistroTabla,
                                            setEstadoModalRegistroTabla
                                        );
                                    }}
                                >
                                    <MenuRegistroTipoStatus
                                        funcionRegistrar={(
                                            descripcionDeTipoStatus: string,
                                        ) => {
                                            registrarDato(
                                                refresh,
                                                descripcionDeTipoStatus,
                                                RegistrarTipoStatus,
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
                                    tituloBoton='Buscar Tipo de Status'
                                >
                                    <InputBusqueda
                                        setDescripcionTipoStatus={setDescripcionTipoStatus}
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

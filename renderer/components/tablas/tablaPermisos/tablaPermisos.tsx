'use client'

// React.
import React from 'react';

// Componentes propios.
import Tabla from '../tabla';

// Funciones propias.
import { formatearDatos } from '../../../utils/formatDataTabla';
import { funcionRefresh } from '../../../utils/refresh';

// Interfaz de API.
import {
    ConsultaPermiso,
    ModificarPermiso,
    RegistrarPermiso,
    RemoverPermiso
} from '../../../utils/API/interface/permiso';
import InputBusquedaPermisos from '../../../components/inputBusqueda/inputBusquedaPermisos';
import ModalOpcionesTabla from '../../../components/modals/modalOpcionesTabla';
import ModalRegistroPermiso from '../../../components/modals/permisos/modalRegistroPermiso';
import ModalModificarPermiso from '../../../components/modals/permisos/modalModificarPermiso';
import ModalRemoverRegistro from '../../../components/modals/modarRemoverRegistro';

export default function TablaPermisos(
    props: {}
) {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [descripcionPermiso, setDescripcionPermiso] = React.useState();
    const [idPermiso, setIdPermiso] = React.useState();

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
    const [idRegistroOperacion, setIdRegistroOperacion] = React.useState(-1);

    // Declaramos el useEffect de react para actualizar el contenido de la vista.
    React.useEffect(() => {
        console.log('refresh');

        ConsultaPermiso(
            elementos,
            offset,
            idPermiso,
            descripcionPermiso,
            setListaRegistros,
            setTotalPaginas
        );

    }, [
        elementos, 
        paginaActual,
        idPermiso,
        descripcionPermiso,
        refresh
    ]);

    // El componente se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

    // Realiza la rutina guardar el registro en la DB.
    function realizarRegistro(
        descripcionPermiso: string,
        autorizacion: number
    ) {
        setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
        RegistrarPermiso(descripcionPermiso, autorizacion);
        setRefresh(!refresh);
    };

    // Realiza la rutina modificar el registro en la DB.
    function realizarModificacion(
        descripcionPermiso: string,
        autorizacion: number
    ) {
        setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
        ModificarPermiso(idRegistroOperacion, descripcionPermiso, autorizacion);
        setRefresh(!refresh);
    };

    function removerRegistro() {
        setEstadoModalRemoverRegistro(!estadoModalRemoverRegistro);
        RemoverPermiso(idRegistroOperacion);
        setRefresh(!refresh);
    };

    return(
        <Tabla
            titulo={'Tabla de registros de permisos'}
            cabeceras={[
                'ID',
                'Descripción del permiso',
                'Accesos del permiso',
                'Fecha de registro',
                'Última modificación'
            ]}
            registros={formatearDatos(
                listaRegistros,
                [
                    ['id'],
                    ['descripcionPermiso'],
                    ['autorizacion'],
                    ['fechaRegistroPermiso'],
                    ['fechaModificacionPermiso']
                ],
                ['id']
            )}
            paginaActual={paginaActual}
            offset={offset}
            elementos={elementos}
            setPaginaActual={setPaginaActual}
            setOffset={setOffset}
            totalPaginas={totalPaginas}
            mostrarOpciones={opcionesTabla}
            estadoModalOpciones={estadoModalOpcionesTabla}

            toggleModalOpciones={() => {
                setEstadoModalOpcionesTabla(!estadoModalOpcionesTabla);
            }}
            estadoModalAddRegistro={estadoModalRegistroTabla}
            toggleModalAddRegistro={() => {
                setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
            }}
            estadoModalModificarRegistro={estadoModalRegistroTabla}
            toggleModalModificarRegistro={(idRegistro: number) => {
                setIdRegistroOperacion(idRegistro);
                setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
            }}
            estadoModalRemoverRegistro={estadoModalRemoverRegistro}
            toggleModalRemoverRegistro={(idRegistro: number) => {
                setIdRegistroOperacion(idRegistro);
                setEstadoModalRemoverRegistro(!estadoModalRemoverRegistro);
            }}
        >
            { /*Barra de busqueda del permiso*/ }
            <InputBusquedaPermisos
                setIdPermiso={setIdPermiso}
                setDescripcionPermiso={setDescripcionPermiso}
            />

            {/*Modal de opciones de tabla*/}
            <ModalOpcionesTabla
                tituloModal='Opciones de Tabla'
                tituloBotonOk='Aceptar'
                tituloBotonRechazo='Rechazar'
                setRegistrosPorPagina={setElementos}
                setOpcionesTabla={setOpcionesTabla}
                setTiempoRefresh={setTiempoRefresh}
                ocultarOpcionesTabla={false}
                modalActivo={estadoModalOpcionesTabla}
                toggleModal={() => {
                    setEstadoModalOpcionesTabla(!estadoModalOpcionesTabla);
                }}
            />

            {/*Modal de registro de datos*/}
            <ModalRegistroPermiso
                tituloModal='Agregar Registro de Permiso'
                modalActivo={estadoModalRegistroTabla}
                toggleModal={() => {
                    setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
                }}
                funcionRegistrar={realizarRegistro}
            />

            {/*Modal de modificar el registro.*/}
            <ModalModificarPermiso
                tituloModal='Modificar Registro de Permiso'
                modalActivo={estadoModalModificarRegistro}
                toggleModal={() => {
                    setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
                }}
                funcionRegistrar={realizarModificacion}
            />

            {/*Modal de remover el registro.*/}
            <ModalRemoverRegistro
                tituloModal={'Remover el Permiso con id ' + idRegistroOperacion}
                tituloBotonOk='Remover'
                tituloBotonRechazo='Cancelar'
                modalActivo={estadoModalRemoverRegistro}
                toggleModal={() => {
                    setEstadoModalRemoverRegistro(!estadoModalRemoverRegistro);
                }}
                funcionOk={removerRegistro}
            >
                
            </ModalRemoverRegistro>
        </Tabla>
    );
};
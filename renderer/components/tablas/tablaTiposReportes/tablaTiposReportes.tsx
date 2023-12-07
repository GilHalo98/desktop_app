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
    ConsultaTipoReporte,
    ModificarTipoReporte,
    RegistrarTipoReporte,
    RemoverTipoReporte
} from '../../../utils/API/interface/tipoReporte';
import InputBusquedaTipoReportes from '../../../components/inputBusqueda/inputBusquedaTipoReportes';
import ModalOpcionesTabla from '../../../components/modals/modalOpcionesTabla';
import ModalRegistroTipoReporte from '../../../components/modals/tiposReportes/modalRegistroTipoReporte';
import ModalModificarTipoReporte from '../../../components/modals/tiposReportes/modalModificarTipoReporte';
import ModalRemoverRegistro from '../../../components/modals/modarRemoverRegistro';

export default function TablaTiposReportes(
    props: {}
) {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [idTipoReporte, setIdTipoReporte] = React.useState();
    const [clasificacionReporte, setClasificacionReporte] = React.useState();

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

        ConsultaTipoReporte(
            elementos,
            offset,
            idTipoReporte,
            clasificacionReporte,
            setListaRegistros,
            setTotalPaginas
        );

    }, [
        elementos, 
        paginaActual,
        idTipoReporte,
        clasificacionReporte,
        refresh
    ]);

    // El componente se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

    // Realiza la rutina guardar el registro en la DB.
    function realizarRegistro(
        descripcionTipoReporte: string,
        clasificacionReporte: string
    ) {
        setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
        RegistrarTipoReporte(descripcionTipoReporte, clasificacionReporte);
        setRefresh(!refresh);
    };

    // Realiza la rutina modificar el registro en la DB.
    function realizarModificacion(
        descripcionTipoReporte: string,
        clasificacionReporte: string
    ) {
        setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
        ModificarTipoReporte(idRegistroOperacion, descripcionTipoReporte, clasificacionReporte);
        setRefresh(!refresh);
    };

    function removerRegistro() {
        setEstadoModalRemoverRegistro(!estadoModalRemoverRegistro);
        RemoverTipoReporte(idRegistroOperacion);
        setRefresh(!refresh);
    };

    return(
        <Tabla
            titulo={'Tabla de registros de TipoReportes'}
            cabeceras={[
                'ID',
                'Tipo de reporte',
                'Descripcion',
                'Fecha de registro',
                'Última modificación'
            ]}
            registros={formatearDatos(
                listaRegistros,
                [
                    ['id'],
                    ['clasificacionReporte'],
                    ['descripcionTipoReporte'],
                    ['fechaRegistroTipoReporte'],
                    ['fechaModificacionTipoReporte']
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
            { /*Barra de busqueda del TipoReporte*/ }
            <InputBusquedaTipoReportes
                setIdTipoReporte={setIdTipoReporte}
                setClasificacionReporte={setClasificacionReporte}
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
            <ModalRegistroTipoReporte
                tituloModal='Agregar Registro de TipoReporte'
                modalActivo={estadoModalRegistroTabla}
                toggleModal={() => {
                    setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
                }}
                funcionRegistrar={realizarRegistro}
            />

            {/*Modal de modificar el registro.*/}
            <ModalModificarTipoReporte
                tituloModal='Modificar Registro de Tipo de Reporte'
                modalActivo={estadoModalModificarRegistro}
                toggleModal={() => {
                    setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
                }}
                funcionModificacion={realizarModificacion}
            />

            {/*Modal de remover el registro.*/}
            <ModalRemoverRegistro
                tituloModal={'Remover el Tipo de Reporte con id ' + idRegistroOperacion}
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
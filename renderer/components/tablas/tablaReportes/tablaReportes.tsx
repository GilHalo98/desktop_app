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
    ConsultaReporte
} from '../../../utils/API/interface/reporte'

import ModalOpcionesTabla from '../../../components/modals/modalOpcionesTabla';
import InputBusquedaReporte from '../../../components/inputBusqueda/inputBusquedaReporte';

export default function TablaReportes(
    props: {}
) {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [idTipoReporte, setIdTipoReporte] = React.useState();
    const [idReporte, setIdReporte] = React.useState();

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
    const [idRegistroOperacion, setIdRegistroOperacion] = React.useState(-1);

    // Declaramos el useEffect de react para actualizar el contenido de la vista.
    React.useEffect(() => {
        console.log('refresh');

        ConsultaReporte(
            elementos,
            offset,
            idReporte,
            null,
            idTipoReporte,
            setListaRegistros,
            setTotalPaginas
        );

    }, [
        elementos, 
        paginaActual,
        idReporte,
        idTipoReporte,
        refresh
    ]);

    // El componente se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

    return(
        <Tabla
            titulo={'Tabla de Reportes'}
            cabeceras={[
                'ID',
                'Descripcion',
                'Tipo de reporte',
                'Fecha de registro',
                'Empleado'
            ]}
            registros={
                formatearDatos(
                    listaRegistros,
                    [
                        ['id'],
                        ['descripcionReporte'],
                        ['tipoReporte', 'descripcionTipoReporte'],
                        ['fechaRegistroReporte'],
                        ['empleado', 'nombres']
                    ],
                    [
                        'id'
                    ]
                )
            }

            paginaActual={paginaActual}
            offset={offset}
            elementos={elementos}
            setPaginaActual={setPaginaActual}
            setOffset={setOffset}
            totalPaginas={totalPaginas}
            mostrarOpciones={opcionesTabla}
            estadoModalOpciones={estadoModalOpcionesTabla}
            ocultarBotonRegistro={true}

            toggleModalOpciones={() => {
                setEstadoModalOpcionesTabla(!estadoModalOpcionesTabla);
            }}
        >
            { /*Barra de busqueda del Empleado*/ }
            <InputBusquedaReporte
                setIdTipoReporte={setIdTipoReporte}
                setIdReporte={setIdReporte}
            />

            {/*Modal de opciones de tabla*/}
            <ModalOpcionesTabla
                tituloModal='Opciones de Tabla'
                tituloBotonOk='Aceptar'
                tituloBotonRechazo='Rechazar'
                setRegistrosPorPagina={setElementos}
                setOpcionesTabla={setOpcionesTabla}
                setTiempoRefresh={setTiempoRefresh}
                ocultarOpcionesTabla={true}
                modalActivo={estadoModalOpcionesTabla}
                toggleModal={() => {
                    setEstadoModalOpcionesTabla(!estadoModalOpcionesTabla);
                }}
            />
        </Tabla>
    );
};
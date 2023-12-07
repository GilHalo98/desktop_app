'use client'

// React.
import React from 'react';

// Componentes propios.
import Lista from '../lista';

// Funciones propias.
import { formatearDatos, selectorColorReporteAccesos } from '../../../utils/formatDataTabla';
import { funcionRefresh } from '../../../utils/refresh';

// Interfaz de API.
import {
    ConsultaAccesosRecientes
} from '../../../utils/API/interface/dashboard'

import ModalOpcionesLista from '../../../components/modals/modalOpcionesLista';

export default function ListaAccesosRecientes(
    props: {}
) {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de las opciones de la tabla.
    const [elementos, setElementos] = React.useState(5);
    const [opcionesTabla, setOpcionesTabla] = React.useState(false);
    const [refresh, setRefresh] = React.useState(true);
    const [tiempoRefresh, setTiempoRefresh] = React.useState(1);

    // Hooks del modal.
    const [estadoModalOpcionesLista, setEstadoModalOpcionesLista] = React.useState(false);
    const [estadoModalRegistroTabla, setEstadoModalRegistroTabla] = React.useState(false);
    const [estadoModalRemoverRegistro, setEstadoModalRemoverRegistro] = React.useState(false);
    const [estadoModalModificarRegistro, setEstadoModalModificarRegistro] = React.useState(false);

    // Hook del id del registro para operaciones
    const [idRegistroOperacion, setIdRegistroOperacion] = React.useState(-1);

    // Declaramos el useEffect de react para actualizar el contenido de la vista.
    React.useEffect(() => {
        console.log('refresh');

        ConsultaAccesosRecientes(
            elementos,
            offset,
            null,
            null,
            setListaRegistros,
            setTotalPaginas
        );

    }, [
        elementos, 
        paginaActual,
        refresh
    ]);

    // El componente se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

    return(
        <Lista
            titulo={'Accesos Recientes'}
            cabeceras={[
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
                        ['empleado', 'nombres'],
                        ['idTipoReporteVinculado'],
                    ],
                    [
                        'id',
                        'idTipoReporteVinculado'
                    ]
                )
            }
            seleccionColorFila={selectorColorReporteAccesos}

            paginaActual={paginaActual}
            offset={offset}
            elementos={elementos}
            setPaginaActual={setPaginaActual}
            setOffset={setOffset}
            totalPaginas={totalPaginas}
            mostrarOpciones={opcionesTabla}
            estadoModalOpciones={estadoModalOpcionesLista}
            ocultarBotonRegistro={true}

            toggleModalOpciones={() => {
                setEstadoModalOpcionesLista(!estadoModalOpcionesLista);
            }}
        >
            {/*Modal de opciones de la lista*/}
            <ModalOpcionesLista
                tituloModal='Opciones de Lista'
                tituloBotonOk='Aceptar'
                tituloBotonRechazo='Rechazar'
                setTiempoRefresh={setTiempoRefresh}
                modalActivo={estadoModalOpcionesLista}
                toggleModal={() => {
                    setEstadoModalOpcionesLista(!estadoModalOpcionesLista);
                }}
            />
        </Lista>
    );
};
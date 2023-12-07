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
    ConsultaRol,
    ModificarRol,
    RegistrarRol,
    RemoverRol
} from '../../../utils/API/interface/rol';
import InputBusquedaRoles from '../../../components/inputBusqueda/inputBusquedaRoles';
import ModalOpcionesTabla from '../../../components/modals/modalOpcionesTabla';
import ModalRegistroRol from '../../../components/modals/roles/modalRegistroRol';
import ModalModificarRol from '../../../components/modals/roles/modalModificarRol';
import ModalRemoverRegistro from '../../../components/modals/modarRemoverRegistro';

export default function TablaRoles(
    props: {}
) {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [rolTrabajador, setRolTrabajador] = React.useState();
    const [idRol, setIdRol] = React.useState();

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

        ConsultaRol(
            elementos,
            offset,
            idRol,
            rolTrabajador,
            null,
            null,
            setListaRegistros,
            setTotalPaginas
        );

    }, [
        elementos, 
        paginaActual,
        idRol,
        rolTrabajador,
        refresh
    ]);

    // El componente se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

    // Realiza la rutina guardar el registro en la DB.
    function realizarRegistro(
        rolTrabajador: string,
        descripcionRol: string,
        idPermisoVinculados: number
    ) {
        setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
        RegistrarRol(
            rolTrabajador,
            descripcionRol,
            idPermisoVinculados
        );
        setRefresh(!refresh);
    };

    // Realiza la rutina modificar el registro en la DB.
    function realizarModificacion(
        rolTrabajador: string,
        descripcionRol: string,
        idPermisoVinculados: number
    ) {
        setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
        ModificarRol(
            idRegistroOperacion,
            rolTrabajador,
            descripcionRol,
            idPermisoVinculados
        );
        setRefresh(!refresh);
    };

    function removerRegistro() {
        setEstadoModalRemoverRegistro(!estadoModalRemoverRegistro);
        RemoverRol(idRegistroOperacion);
        setRefresh(!refresh);
    };

    return(
        <Tabla
            titulo={'Tabla de registros de Roles'}
            cabeceras={[
                'ID',
                'Rol',
                'Descripción del Rol',
                'Fecha de registro',
                'Última modificación'
            ]}
            registros={formatearDatos(
                listaRegistros,
                [
                    ['id'],
                    ['rolTrabajador'],
                    ['descripcionRol'],
                    ['fechaRegistroRol'],
                    ['fechaModificacionRol']
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
            { /*Barra de busqueda del Rol*/ }
            <InputBusquedaRoles
                setIdRol={setIdRol}
                setRolTrabajador={setRolTrabajador}
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
            <ModalRegistroRol
                tituloModal='Agregar Registro de Rol'
                modalActivo={estadoModalRegistroTabla}
                toggleModal={() => {
                    setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
                }}
                funcionRegistrar={realizarRegistro}
            />

            {/*Modal de modificar el registro.*/}
            <ModalModificarRol
                tituloModal='Modificar Registro de Rol'
                modalActivo={estadoModalModificarRegistro}
                toggleModal={() => {
                    setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
                }}
                funcionModificar={realizarModificacion}
            />

            {/*Modal de remover el registro.*/}
            <ModalRemoverRegistro
                tituloModal={'Remover el Rol con id ' + idRegistroOperacion}
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
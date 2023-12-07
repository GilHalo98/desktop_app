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
    ConsultaEmpleado,
    ModificarEmpleado,
    RegistrarEmpleado,
    RemoverEmpleado
} from '../../../utils/API/interface/empleado';

import InputBusquedaEmpleados from '../../../components/inputBusqueda/inputBusquedaEmpleados';
import ModalOpcionesTabla from '../../../components/modals/modalOpcionesTabla';
import ModalRegistroEmpleado from '../../../components/modals/empleados/modalRegistroEmpleado';
import ModalModificarEmpleado from '../../../components/modals/empleados/modalModificarEmpleado';
import ModalRemoverRegistro from '../../../components/modals/modarRemoverRegistro';

export default function TablaEmpleados(
    props: {}
) {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    // Hooks de la barra de busqueda.
    const [idEmpleado, setIdEmpleado] = React.useState();
    const [nombresEmpleado, setNombresEmpleado] = React.useState();
    const [contactoEmpleado, setContactoEmpleado] = React.useState();

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

        ConsultaEmpleado(
            elementos,
            offset,
            idEmpleado,
            contactoEmpleado,
            nombresEmpleado,
            null,
            null,
            null,
            setListaRegistros,
            setTotalPaginas
        );

    }, [
        elementos, 
        paginaActual,
        idEmpleado,
        nombresEmpleado,
        contactoEmpleado,
        refresh
    ]);

    // El componente se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

    // Realiza la rutina guardar el registro en la DB.
    function realizarRegistro(
        nombres: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        numeroTelefonico: string,
        fechaNacimiento: string,
        idRolVinculado: number
    ) {
        setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
        RegistrarEmpleado(
            nombres,
            apellidoPaterno,
            apellidoMaterno,
            numeroTelefonico,
            fechaNacimiento,
            idRolVinculado
        );
        setRefresh(!refresh);
    };

    // Realiza la rutina modificar el registro en la DB.
    function realizarModificacion(
        nombres: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        numeroTelefonico: string,
        fechaNacimiento: string,
        idRolVinculado: number
    ) {
        setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
        ModificarEmpleado(
            idRegistroOperacion,
            nombres,
            apellidoPaterno,
            apellidoMaterno,
            numeroTelefonico,
            fechaNacimiento,
            idRolVinculado
        );
        setRefresh(!refresh);
    };

    function removerRegistro() {
        setEstadoModalRemoverRegistro(!estadoModalRemoverRegistro);
        RemoverEmpleado(idRegistroOperacion);
        setRefresh(!refresh);
    };

    return(
        <Tabla
            titulo={'Tabla de registros de Empleados'}
            cabeceras={[
                'ID',
                'Nombres',
                'Contacto',
                'Fecha de registro',
                'Última modificación'
            ]}
            registros={formatearDatos(
                listaRegistros,
                [
                    ['id'],
                    ['nombres'],
                    ['numeroTelefonico'],
                    ['fechaRegistroEmpleado'],
                    ['fechaModificacionEmpleado']
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
            { /*Barra de busqueda del Empleado*/ }
            <InputBusquedaEmpleados
                setIdEmpleado={setIdEmpleado}
                setNombresEmpleado={setNombresEmpleado}
                setContactoEmpleado={setContactoEmpleado}
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
            <ModalRegistroEmpleado
                tituloModal='Agregar Registro de Empleado'
                modalActivo={estadoModalRegistroTabla}
                toggleModal={() => {
                    setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
                }}
                funcionRegistrar={realizarRegistro}
            />

            {/*Modal de modificar el registro.*/}
            <ModalModificarEmpleado
                tituloModal='Modificar Registro de Empleado'
                modalActivo={estadoModalModificarRegistro}
                toggleModal={() => {
                    setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
                }}
                funcionModificar={realizarModificacion}
            />

            {/*Modal de remover el registro.*/}
            <ModalRemoverRegistro
                tituloModal={'Remover el Empleado con id ' + idRegistroOperacion}
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
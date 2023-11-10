// Importamos los request.
import {
    GetEstadoStatus,
    PostEstadoStatus,
    DeleteEstadoStatus,
    PutEstadoStatus 
} from "../request/estadoStatus";

function ConsultaEstadoStatus (
    limit: number,
    offset: number,
    nombreEstado: string,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        nombreEstado: nombreEstado
    };

    // Realizamos el request.
    GetEstadoStatus(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la zona.
        setListaRegistros(respuesta.data.registros);

        // Guardamos el total de paginas en la variable.
        setTotalPaginas(Math.ceil(respuesta.data.totalRegistros / limit));

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RegistrarEstadoStatus (
    nombreEstado: string
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        nombreEstado: nombreEstado
    };

    // Realizamos el request.
    PostEstadoStatus(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverEstadoStatus(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteEstadoStatus(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarEstadoStatus(
    idRegistro: number,
    nombreEstado: string,
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        nombreEstado: nombreEstado
    }

    // Realizamos el request.
    PutEstadoStatus(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaEstadoStatus,
    RegistrarEstadoStatus,
    RemoverEstadoStatus,
    ModificarEstadoStatus
};
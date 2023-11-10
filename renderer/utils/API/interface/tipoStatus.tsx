// Importamos los request.
import {
    GetTipoStatus,
    PostTipoStatus,
    DeleteTipoStatus,
    PutTipoStatus 
} from "../request/tipoStatus";

function ConsultaTipoStatus (
    limit: number,
    offset: number,
    descripcionTipoStatus: string,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        descripcionTipoStatus: descripcionTipoStatus,
    };

    // Realizamos el request.
    GetTipoStatus(parametrosBusqueda).then((respuesta) => {
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

function RegistrarTipoStatus (
    descripcionTipoStatus: string
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        descripcionTipoStatus: descripcionTipoStatus
    };

    // Realizamos el request.
    PostTipoStatus(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverTipoStatus(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteTipoStatus(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarTipoStatus(
    idRegistro: number,
    descripcionTipoStatus: string
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        descripcionTipoStatus: descripcionTipoStatus
    }

    // Realizamos el request.
    PutTipoStatus(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaTipoStatus,
    RegistrarTipoStatus,
    RemoverTipoStatus,
    ModificarTipoStatus
};
// Importamos los request.
import {
    GetStatus,
    PostStatus,
    DeleteStatus,
    PutStatus 
} from "../request/status";

function ConsultaStatus (
    limit: number,
    offset: number,
    dataMatrix: string,
    idEstadoVinculado: number,
    idTipoStatusVinculado: number,
    idPiezaStatusVinculada: number,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        dataMatrix: dataMatrix,
        idEstadoVinculado: idEstadoVinculado,
        idTipoStatusVinculado: idTipoStatusVinculado,
        idPiezaStatusVinculada: idPiezaStatusVinculada,
    };

    // Realizamos el request.
    GetStatus(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la status.
        setListaRegistros(respuesta.data.registros);

        if(setTotalPaginas) {
            // Guardamos el total de paginas en la variable.
            setTotalPaginas(Math.ceil(respuesta.data.totalRegistros / limit));
        }

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RegistrarStatus (
    idEstadoVinculado: number,
    idTipoStatusVinculado: number,
    idPiezaStatusVinculada: number
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        idEstadoVinculado: idEstadoVinculado,
        idTipoStatusVinculado: idTipoStatusVinculado,
        idPiezaStatusVinculada: idPiezaStatusVinculada
    };

    // Realizamos el request.
    PostStatus(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverStatus(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteStatus(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarStatus(
    idRegistro: number,
    idEstadoVinculado: number,
    idTipoStatusVinculado: number,
    idPiezaStatusVinculada: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        idEstadoVinculado: idEstadoVinculado,
        idTipoStatusVinculado: idTipoStatusVinculado,
        idPiezaStatusVinculada: idPiezaStatusVinculada
    }

    // Realizamos el request.
    PutStatus(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaStatus,
    RegistrarStatus,
    RemoverStatus,
    ModificarStatus
};
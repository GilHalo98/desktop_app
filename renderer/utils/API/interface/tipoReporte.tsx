// Importamos los request.
import {
    GetTipoReporte,
    PostTipoReporte,
    DeleteTipoReporte,
    PutTipoReporte 
} from "../request/tipoReporte";

function ConsultaTipoReporte (
    limit: number,
    offset: number,
    descripcionTipoReporte: string,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        descripcionTipoReporte: descripcionTipoReporte,
    };

    // Realizamos el request.
    GetTipoReporte(parametrosBusqueda).then((respuesta) => {
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

function RegistrarTipoReporte (
    descripcionTipoReporte: string
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        descripcionTipoReporte: descripcionTipoReporte
    };

    // Realizamos el request.
    PostTipoReporte(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverTipoReporte(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteTipoReporte(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarTipoReporte(
    idRegistro: number,
    descripcionTipoReporte: string
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        descripcionTipoReporte: descripcionTipoReporte
    }

    // Realizamos el request.
    PutTipoReporte(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaTipoReporte,
    RegistrarTipoReporte,
    RemoverTipoReporte,
    ModificarTipoReporte
};
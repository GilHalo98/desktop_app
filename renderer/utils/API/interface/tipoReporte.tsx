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
    id: number,
    clasificacionReporte: string,
    setListaRegistros: Function,
    setTotalPaginas: Function,
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        id: id,
        clasificacionReporte: clasificacionReporte
    };

    // Realizamos el request.
    GetTipoReporte(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la TipoReporte.
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

function RegistrarTipoReporte (
    clasificacionReporte: string,
    descripcionTipoReporte: string
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        clasificacionReporte: clasificacionReporte,
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
    clasificacionReporte: string,
    descripcionTipoReporte: string
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        clasificacionReporte: clasificacionReporte,
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
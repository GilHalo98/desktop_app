// Importamos los request.
import {
    GetReporte,
    PostReporte,
    DeleteReporte,
    PutReporte 
} from "../request/reporte";

function ConsultaReporte (
    limit: number,
    offset: number,
    idPiezaVinculada: number,
    idZonaVinculada: number,
    idTipoReporteVinculado: number,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        idPiezaVinculada: idPiezaVinculada,
        idZonaVinculada: idZonaVinculada,
        idTipoReporteVinculado: idTipoReporteVinculado
    };

    // Realizamos el request.
    GetReporte(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la reporte.
        setListaRegistros(respuesta.data.registros);

        // Guardamos el total de paginas en la variable.
        setTotalPaginas(Math.ceil(respuesta.data.totalRegistros / limit));

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RegistrarReporte (
    descripcionReporte: string,
    idPiezaVinculada: number,
    idZonaVinculada: number,
    idTipoReporteVinculado: number
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        descripcionReporte: descripcionReporte,
        idPiezaVinculada: idPiezaVinculada,
        idZonaVinculada: idZonaVinculada,
        idTipoReporteVinculado: idTipoReporteVinculado
    };

    // Realizamos el request.
    PostReporte(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverReporte(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteReporte(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarReporte(
    idRegistro: number,
    descripcionReporte: string,
    idPiezaVinculada: number,
    idZonaVinculada: number,
    idTipoReporteVinculado: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        descripcionReporte: descripcionReporte,
        idPiezaVinculada: idPiezaVinculada,
        idZonaVinculada: idZonaVinculada,
        idTipoReporteVinculado: idTipoReporteVinculado
    }

    // Realizamos el request.
    PutReporte(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaReporte,
    RegistrarReporte,
    RemoverReporte,
    ModificarReporte
};
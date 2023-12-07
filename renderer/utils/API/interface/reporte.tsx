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
    id: string,
    descripcionReporte: string,
    idTipoReporteVinculado: number,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        id: id,
        descripcionReporte: descripcionReporte,
        idTipoReporteVinculado: idTipoReporteVinculado
    };

    // Realizamos el request.
    GetReporte(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la Reporte.
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

function RegistrarReporte (
    descripcionReporte: string,
    idTipoReporteVinculado: number
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        descripcionReporte: descripcionReporte,
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
    idTipoReporteVinculado: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        descripcionReporte: descripcionReporte,
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
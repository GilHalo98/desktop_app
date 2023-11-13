// Importamos los request.
import {
    GetSeguimientoPiezas,
    GetBuscarPiezaEnSeguimiento,
    GetPiezasOkRechazadas,
    GetPiezasProcesadasPorLinea,
    GetConteoPiezasPorTipo
} from "../request/dashboard";

function SeguimientoPiezas (
    limit: number,
    offset: number,
    idLineaVinculada: number,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        idLineaVinculada: idLineaVinculada
    };

    // Realizamos el request.
    GetSeguimientoPiezas(parametrosBusqueda).then((respuesta) => {
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

function BuscarPiezaEnSeguimiento (
    dataMatrix: string,
    setRegistroBuscado: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        dataMatrix: dataMatrix.length <= 0 ? null : dataMatrix
    };

    // Realizamos el request.
    GetBuscarPiezaEnSeguimiento(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la zona.
        setRegistroBuscado(respuesta.data.registro);

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function PiezasOkRechazadas(
    setDatosReporte: Function
) {
    // Realizamos el request.
    GetPiezasOkRechazadas().then((respuesta) => {
        // Guardamos los reportes en la zona.
        setDatosReporte(respuesta.data.reporte);

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function PiezasProcesadasPorLinea(
    setDatosReporte: Function
) {
    // Realizamos el request.
    GetPiezasProcesadasPorLinea().then((respuesta) => {
        // Guardamos los reportes en la zona.
        setDatosReporte(respuesta.data.reporte);

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function ConteoPiezasPorTipo(
    setDatosReporte: Function
) {
    // Realizamos el request.
    GetConteoPiezasPorTipo().then((respuesta) => {
        // Guardamos los reportes en la zona.
        setDatosReporte(respuesta.data.reporte);

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};


export {
    SeguimientoPiezas,
    BuscarPiezaEnSeguimiento,
    PiezasOkRechazadas,
    PiezasProcesadasPorLinea,
    ConteoPiezasPorTipo
};
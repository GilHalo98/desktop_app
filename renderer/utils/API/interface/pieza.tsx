// Importamos los request.
import {
    GetPieza,
    PostPieza,
    DeletePieza,
    PutPieza 
} from "../request/pieza";

function ConsultaPieza (
    limit: number,
    offset: number,
    dataMatrix: string,
    idTipoPiezaVinculada: number,
    idZonaActualVinculada: number,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        dataMatrix: dataMatrix,
        idTipoPiezaVinculada: idTipoPiezaVinculada,
        idZonaActualVinculada: idZonaActualVinculada
    };

    // Realizamos el request.
    GetPieza(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la pieza.
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

function RegistrarPieza (
    dataMatrix: string,
    idTipoPiezaVinculada: number,
    idZonaActualVinculada: number
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        dataMatrix: dataMatrix,
        idTipoPiezaVinculada: idTipoPiezaVinculada,
        idZonaActualVinculada: idZonaActualVinculada
    };

    // Realizamos el request.
    PostPieza(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverPieza(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeletePieza(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarPieza(
    idRegistro: number,
    dataMatrix: string,
    idTipoPiezaVinculada: number,
    idZonaActualVinculada: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        dataMatrix: dataMatrix,
        idTipoPiezaVinculada: idTipoPiezaVinculada,
        idZonaActualVinculada: idZonaActualVinculada
    }

    // Realizamos el request.
    PutPieza(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaPieza,
    RegistrarPieza,
    RemoverPieza,
    ModificarPieza
};
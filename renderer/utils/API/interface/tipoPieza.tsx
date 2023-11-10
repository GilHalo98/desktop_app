// Importamos los request.
import {
    GetTipoPieza,
    PostTipoPieza,
    DeleteTipoPieza,
    PutTipoPieza 
} from "../request/tipoPieza";

function ConsultaTipoPieza (
    limit: number,
    offset: number,
    descripcionTipoPieza: string,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        descripcionTipoPieza: descripcionTipoPieza,
    };

    // Realizamos el request.
    GetTipoPieza(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la zona.
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

function RegistrarTipoPieza (
    descripcionTipoPieza: string
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        descripcionTipoPieza: descripcionTipoPieza
    };

    // Realizamos el request.
    PostTipoPieza(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverTipoPieza(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteTipoPieza(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarTipoPieza(
    idRegistro: number,
    descripcionTipoPieza: string
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        descripcionTipoPieza: descripcionTipoPieza
    }

    // Realizamos el request.
    PutTipoPieza(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaTipoPieza,
    RegistrarTipoPieza,
    RemoverTipoPieza,
    ModificarTipoPieza
};
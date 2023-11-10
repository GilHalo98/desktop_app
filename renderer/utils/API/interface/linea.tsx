// Importamos los request.
import {
    GetLinea,
    PostLinea,
    DeleteLinea,
    PutLinea 
} from "../request/linea";

function ConsultaLinea (
    limit: number,
    offset: number,
    nombreLinea: string,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        nombreLinea: nombreLinea
    };

    // Realizamos el request.
    GetLinea(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la lista.
        setListaRegistros(respuesta.data.registros);

        // Guardamos el total de paginas en la variable.
        setTotalPaginas(Math.ceil(respuesta.data.totalRegistros / limit));

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RegistrarLinea (
    nombreLinea: string,
    descripcionLinea: string
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        nombreLinea: nombreLinea,
        descripcionLinea: descripcionLinea
    };

    // Realizamos el request.
    PostLinea(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverLinea(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteLinea(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarLinea(
    idRegistro: number,
    nombreLinea: string,
    descripcionLinea: string
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        nombreLinea: nombreLinea,
        descripcionLinea: descripcionLinea
    }

    // Realizamos el request.
    PutLinea(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaLinea,
    RegistrarLinea,
    RemoverLinea,
    ModificarLinea
};
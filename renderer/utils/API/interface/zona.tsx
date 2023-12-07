// Importamos los request.
import {
    GetZona,
    PostZona,
    DeleteZona,
    PutZona 
} from "../request/zona";

function ConsultaZona (
    limit: number,
    offset: number,
    id: number,
    nombreZona: string,
    setListaRegistros: Function,
    setTotalPaginas: Function,
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        id: id,
        nombreZona: nombreZona
    };

    // Realizamos el request.
    GetZona(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la Zona.
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

function RegistrarZona (
    nombreZona: string,
    descripcionZona: string
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        nombreZona: nombreZona,
        descripcionZona: descripcionZona
    };

    // Realizamos el request.
    PostZona(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverZona(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteZona(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarZona(
    idRegistro: number,
    nombreZona: string,
    descripcionZona: string
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        nombreZona: nombreZona,
        descripcionZona: descripcionZona
    }

    // Realizamos el request.
    PutZona(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaZona,
    RegistrarZona,
    RemoverZona,
    ModificarZona
};
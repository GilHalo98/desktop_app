// Importamos los request.
import {
    GetPermiso,
    PostPermiso,
    DeletePermiso,
    PutPermiso 
} from "../request/permiso";

function ConsultaPermiso (
    limit: number,
    offset: number,
    id: string,
    descripcionPermiso: string,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        id: id,
        descripcionPermiso: descripcionPermiso
    };

    // Realizamos el request.
    GetPermiso(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la Permiso.
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

function RegistrarPermiso (
    descripcionPermiso: string,
    autorizacion: number
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        descripcionPermiso: descripcionPermiso,
        autorizacion: autorizacion
    };

    // Realizamos el request.
    PostPermiso(cuerpoRegistro).then((respuesta) => {
    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverPermiso(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeletePermiso(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarPermiso(
    idRegistro: number,
    descripcionPermiso: string,
    autorizacion: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        descripcionPermiso: descripcionPermiso,
        autorizacion: autorizacion
    }

    // Realizamos el request.
    PutPermiso(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaPermiso,
    RegistrarPermiso,
    RemoverPermiso,
    ModificarPermiso
};
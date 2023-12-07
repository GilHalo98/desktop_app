// Importamos los request.
import {
    GetIoT,
    PostIoT,
    DeleteIoT,
    PutIoT 
} from "../request/IoT";

function ConsultaIoT (
    limit: number,
    offset: number,
    id: number,
    idPermisoVinculado: number,
    setListaRegistros: Function,
    setTotalPaginas: Function,
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        id: id,
        idPermisoVinculado: idPermisoVinculado
    };

    // Realizamos el request.
    GetIoT(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la IoT.
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

function RegistrarIoT (
    descripcionDispositivo: string,
    idPermisoVinculado: number
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        descripcionDispositivo: descripcionDispositivo,
        idPermisoVinculado: idPermisoVinculado
    };

    // Realizamos el request.
    PostIoT(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverIoT(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteIoT(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarIoT(
    idRegistro: number,
    descripcionDispositivo: string,
    idPermisoVinculado: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        descripcionDispositivo: descripcionDispositivo,
        idPermisoVinculado: idPermisoVinculado
    }

    // Realizamos el request.
    PutIoT(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaIoT,
    RegistrarIoT,
    RemoverIoT,
    ModificarIoT
};
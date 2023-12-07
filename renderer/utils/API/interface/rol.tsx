// Importamos los request.
import {
    GetRol,
    PostRol,
    DeleteRol,
    PutRol 
} from "../request/rol";

function ConsultaRol (
    limit: number,
    offset: number,
    id: number,
    rolTrabajador: string,
    descripcionRol: string,
    idPermisoVinculado: number,
    setListaRegistros: Function,
    setTotalPaginas: Function,
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        id: id,
        rolTrabajador: rolTrabajador,
        descripcionRol: descripcionRol,
        idPermisoVinculado: idPermisoVinculado
    };

    // Realizamos el request.
    GetRol(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la Rol.
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

function RegistrarRol (
    rolTrabajador: string,
    descripcionRol: string,
    idPermisoVinculado: number,
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        rolTrabajador: rolTrabajador,
        descripcionRol: descripcionRol,
        idPermisoVinculado: idPermisoVinculado
    };

    // Realizamos el request.
    PostRol(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverRol(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteRol(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarRol(
    idRegistro: number,
    rolTrabajador: string,
    descripcionRol: string,
    idPermisoVinculado: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        rolTrabajador: rolTrabajador,
        descripcionRol: descripcionRol,
        idPermisoVinculado: idPermisoVinculado
    }

    // Realizamos el request.
    PutRol(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaRol,
    RegistrarRol,
    RemoverRol,
    ModificarRol
};
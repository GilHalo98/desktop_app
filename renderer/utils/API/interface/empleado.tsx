// Importamos los request.
import {
    GetEmpleado,
    PostEmpleado,
    DeleteEmpleado,
    PutEmpleado 
} from "../request/empleado";

function ConsultaEmpleado (
    limit: number,
    offset: number,
    id: string,
    numeroTelefonico: string,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    idRolVinculado: number,
    setListaRegistros: Function,
    setTotalPaginas: Function
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        limit: limit,
        offset: offset,
        id: id,
        numeroTelefonico: numeroTelefonico,
        nombres: nombres,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        idRolVinculado: idRolVinculado,
    };

    // Realizamos el request.
    GetEmpleado(parametrosBusqueda).then((respuesta) => {
        // Guardamos los registros en la Empleado.
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

function RegistrarEmpleado (
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    numeroTelefonico: string,
    fechaNacimiento: string,
    idRolVinculado: number
) {
    // Creamos el cuerpo del registro.
    const cuerpoRegistro = {
        nombres: nombres,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        numeroTelefonico: numeroTelefonico,
        fechaNacimiento: fechaNacimiento,
        idRolVinculado: idRolVinculado
    };

    // Realizamos el request.
    PostEmpleado(cuerpoRegistro).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
};

function RemoverEmpleado(
    idRegistro: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro
    }

    // Realizamos el request.
    DeleteEmpleado(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

function ModificarEmpleado(
    idRegistro: number,
    nombres: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    numeroTelefonico: string,
    fechaNacimiento: string,
    idRolVinculado: number
) {
    // Creamos los parametros de busqueda de la consulta.
    const parametrosBusqueda = {
        id: idRegistro,
        nombres: nombres,
        apellidoPaterno: apellidoPaterno,
        apellidoMaterno: apellidoMaterno,
        numeroTelefonico: numeroTelefonico,
        fechaNacimiento: fechaNacimiento,
        idRolVinculado: idRolVinculado,
    }

    // Realizamos el request.
    PutEmpleado(parametrosBusqueda).then((respuesta) => {

    }).catch((error) => {
        // Ocurrio un errr al realizar el request.
        console.log(error);

    }).finally(() => {
    });
}

export {
    ConsultaEmpleado,
    RegistrarEmpleado,
    RemoverEmpleado,
    ModificarEmpleado
};
// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetEmpleado = async (
    parametros: {
        limit: number,
        offset: number,
        id: string,
        numeroTelefonico: string,
        nombres: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        idRolVinculado: number,
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.EMPLEADO.CONSULTA,
        params: parametros
    });
};

const PostEmpleado = async (
    body: {
        nombres: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        numeroTelefonico: string,
        fechaNacimiento: string,
        idRolVinculado: number
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.EMPLEADO.REGISTRAR,
        data: body
    });
};

const PutEmpleado = async (
    body: {
        id: number,
        nombres: string,
        apellidoPaterno: string,
        apellidoMaterno: string,
        numeroTelefonico: string,
        fechaNacimiento: string,
        idRolVinculado: number
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.EMPLEADO.MODIFICAR,
        data: body
    });
};

const DeleteEmpleado = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.EMPLEADO.ELIMINAR,
        params: parametros
    });
};

export {
    GetEmpleado,
    PostEmpleado,
    PutEmpleado,
    DeleteEmpleado
};
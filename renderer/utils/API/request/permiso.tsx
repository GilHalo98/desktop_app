// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetPermiso = async (
    parametros: {
        limit: number,
        offset: number,
        id: string,
        descripcionPermiso: string,
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.PERMISO.CONSULTA,
        params: parametros
    });
};

const PostPermiso = async (
    body: {
        descripcionPermiso: string,
        autorizacion: number
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.PERMISO.REGISTRAR,
        data: body
    });
};

const PutPermiso = async (
    body: {
        id: number,
        descripcionPermiso: string,
        autorizacion: number
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.PERMISO.MODIFICAR,
        data: body
    });
};

const DeletePermiso = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.PERMISO.ELIMINAR,
        params: parametros
    });
};

export {
    GetPermiso,
    PostPermiso,
    PutPermiso,
    DeletePermiso
};
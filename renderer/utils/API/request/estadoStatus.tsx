// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetEstadoStatus = async (
    parametros: {
        limit: number,
        offset: number,
        nombreEstado: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.ESTADO_STATUS.CONSULTA,
        params: parametros
    });
};

const PostEstadoStatus = async (
    body: {
        nombreEstado: string
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.ESTADO_STATUS.REGISTRAR,
        data: body
    });
};

const PutEstadoStatus = async (
    body: {
        id: number,
        nombreEstado: string,
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.ESTADO_STATUS.MODIFICAR,
        data: body
    });
};

const DeleteEstadoStatus = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.ESTADO_STATUS.ELIMINAR,
        params: parametros
    });
};

export {
    GetEstadoStatus,
    PostEstadoStatus,
    PutEstadoStatus,
    DeleteEstadoStatus
};
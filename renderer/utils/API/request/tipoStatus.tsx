// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetTipoStatus = async (
    parametros: {
        limit: number,
        offset: number,
        descripcionTipoStatus: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.TIPO_STATUS.CONSULTA,
        params: parametros
    });
};

const PostTipoStatus = async (
    body: {
        descripcionTipoStatus: string
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.TIPO_STATUS.REGISTRAR,
        data: body
    });
};

const PutTipoStatus = async (
    body: {
        id: number,
        descripcionTipoStatus: string
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.TIPO_STATUS.MODIFICAR,
        data: body
    });
};

const DeleteTipoStatus = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.TIPO_STATUS.ELIMINAR,
        params: parametros
    });
};

export {
    GetTipoStatus,
    PostTipoStatus,
    PutTipoStatus,
    DeleteTipoStatus
};
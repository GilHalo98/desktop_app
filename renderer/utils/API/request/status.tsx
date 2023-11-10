// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetStatus = async (
    parametros: {
        limit: number,
        offset: number,
        idEstadoVinculado: number,
        idTipoStatusVinculado: number,
        idPiezaStatusVinculada: number
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.STATUS.CONSULTA,
        params: parametros
    });
};

const PostStatus = async (
    body: {
        idEstadoVinculado: number,
        idTipoStatusVinculado: number,
        idPiezaStatusVinculada: number
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.STATUS.REGISTRAR,
        data: body
    });
};

const PutStatus = async (
    body: {
        id: number,
        idEstadoVinculado: number,
        idTipoStatusVinculado: number,
        idPiezaStatusVinculada: number
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.STATUS.MODIFICAR,
        data: body
    });
};

const DeleteStatus = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.STATUS.ELIMINAR,
        params: parametros
    });
};

export {
    GetStatus,
    PostStatus,
    PutStatus,
    DeleteStatus
};
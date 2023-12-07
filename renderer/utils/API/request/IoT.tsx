// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetIoT = async (
    parametros: {
        limit: number,
        offset: number,
        id: number,
        idPermisoVinculado: number
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.IOT.CONSULTA,
        params: parametros
    });
};

const PostIoT = async (
    body: {
        descripcionDispositivo: string,
        idPermisoVinculado: number
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.IOT.REGISTRAR.DISPOSITIVO,
        data: body
    });
};

const PutIoT = async (
    body: {
        id: number,
        descripcionDispositivo: string,
        idPermisoVinculado: number
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.IOT.MODIFICAR,
        data: body
    });
};

const DeleteIoT = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.IOT.ELIMINAR,
        params: parametros
    });
};

export {
    GetIoT,
    PostIoT,
    PutIoT,
    DeleteIoT
};
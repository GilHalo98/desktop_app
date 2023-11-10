// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetTipoReporte = async (
    parametros: {
        limit: number,
        offset: number,
        descripcionTipoReporte: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.TIPO_REPORTE.CONSULTA,
        params: parametros
    });
};

const PostTipoReporte = async (
    body: {
        descripcionTipoReporte: string
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.TIPO_REPORTE.REGISTRAR,
        data: body
    });
};

const PutTipoReporte = async (
    body: {
        id: number,
        descripcionTipoReporte: string
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.TIPO_REPORTE.MODIFICAR,
        data: body
    });
};

const DeleteTipoReporte = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.TIPO_REPORTE.ELIMINAR,
        params: parametros
    });
};

export {
    GetTipoReporte,
    PostTipoReporte,
    PutTipoReporte,
    DeleteTipoReporte
};
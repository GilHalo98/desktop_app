// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetReporte = async (
    parametros: {
        limit: number,
        offset: number,
        dataMatrix: string,
        idPiezaVinculada: number,
        idZonaVinculada: number,
        idTipoReporteVinculado: number
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.REPORTE.CONSULTA,
        params: parametros
    });
};

const PostReporte = async (
    body: {
        descripcionReporte: string,
        idPiezaVinculada: number,
        idZonaVinculada: number,
        idTipoReporteVinculado: number
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.REPORTE.REGISTRAR,
        data: body
    });
};

const PutReporte = async (
    body: {
        id: number,
        descripcionReporte: string,
        idPiezaVinculada: number,
        idZonaVinculada: number,
        idTipoReporteVinculado: number
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.REPORTE.MODIFICAR,
        data: body
    });
};

const DeleteReporte = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.REPORTE.ELIMINAR,
        params: parametros
    });
};

export {
    GetReporte,
    PostReporte,
    PutReporte,
    DeleteReporte
};
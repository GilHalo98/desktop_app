// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetAccesosRecientes = async (
    parametros: {
        limit: number,
        offset: number,
        id: string,
        descripcionReporte: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.ACCESOS_RECIENTES,
        params: parametros
    });
};

const GetAccesosPorDia = async (
    parametros: {}
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.ACCESOS_POR_DIA,
        params: parametros
    });
};

const GetReportesPorTipo = async (
    parametros: {}
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.REPORTE_POR_TIPO,
        params: parametros
    });
};

export {
    GetAccesosRecientes,
    GetAccesosPorDia,
    GetReportesPorTipo
};
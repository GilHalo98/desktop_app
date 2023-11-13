// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetSeguimientoPiezas = async (
    parametros: {
        limit: number,
        offset: number,
        idLineaVinculada: number
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.SEGUIMIENTO.PIEZAS,
        params: parametros
    });
};

const GetBuscarPiezaEnSeguimiento = async (
    parametros: {
        dataMatrix: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.BUSCAR.PIEZA,
        params: parametros
    });
};

const GetPiezasOkRechazadas = async (
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.REPORTE.STATUS.PIEZA
    });
};

const GetPiezasProcesadasPorLinea = async (
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.REPORTE.PROCESADA.PIEZA
    });
};

const GetConteoPiezasPorTipo = async (
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.DASHBOARD.REPORTE.PROCESADA.TIPO_PIEZA
    });
};


export {
    GetSeguimientoPiezas,
    GetBuscarPiezaEnSeguimiento,
    GetPiezasOkRechazadas,
    GetPiezasProcesadasPorLinea,
    GetConteoPiezasPorTipo
};
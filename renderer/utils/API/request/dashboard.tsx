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

export {
    GetSeguimientoPiezas,
    GetBuscarPiezaEnSeguimiento
};
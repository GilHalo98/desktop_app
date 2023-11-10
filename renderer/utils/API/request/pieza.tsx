// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetPieza = async (
    parametros: {
        limit: number,
        offset: number,
        dataMatrix: string,
        idTipoPiezaVinculada: number,
        idZonaActualVinculada: number
    }
) => {
    console.log(parametros);
    return axios({
        method: 'get',
        url: ENDPOINTS.PIEZA.CONSULTA,
        params: parametros
    });
};

const PostPieza = async (
    body: {
        dataMatrix: string,
        idTipoPiezaVinculada: number,
        idZonaActualVinculada: number
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.PIEZA.REGISTRAR,
        data: body
    });
};

const PutPieza = async (
    body: {
        id: number,
        dataMatrix: string,
        idTipoPiezaVinculada: number,
        idZonaActualVinculada: number
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.PIEZA.MODIFICAR,
        data: body
    });
};

const DeletePieza = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.PIEZA.ELIMINAR,
        params: parametros
    });
};

export {
    GetPieza,
    PostPieza,
    PutPieza,
    DeletePieza
};
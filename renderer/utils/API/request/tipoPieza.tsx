// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetTipoPieza = async (
    parametros: {
        limit: number,
        offset: number,
        descripcionTipoPieza: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.TIPO_PIEZA.CONSULTA,
        params: parametros
    });
};

const PostTipoPieza = async (
    body: {
        descripcionTipoPieza: string
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.TIPO_PIEZA.REGISTRAR,
        data: body
    });
};

const PutTipoPieza = async (
    body: {
        id: number,
        descripcionTipoPieza: string
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.TIPO_PIEZA.MODIFICAR,
        data: body
    });
};

const DeleteTipoPieza = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.TIPO_PIEZA.ELIMINAR,
        params: parametros
    });
};

export {
    GetTipoPieza,
    PostTipoPieza,
    PutTipoPieza,
    DeleteTipoPieza
};
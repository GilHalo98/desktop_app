// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetLinea = async (
    parametros: {
        limit: number,
        offset: number,
        nombreLinea: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.LINEA.CONSULTA,
        params: parametros
    });
};

const PostLinea = async (
    body: {
        nombreLinea: string,
        descripcionLinea: string
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.LINEA.REGISTRAR,
        data: body
    });
};

const PutLinea = async (
    body: {
        id: number,
        nombreLinea: string,
        descripcionLinea: string
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.LINEA.MODIFICAR,
        data: body
    });
};

const DeleteLinea = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.LINEA.ELIMINAR,
        params: parametros
    });
};

export {
    GetLinea,
    PostLinea,
    PutLinea,
    DeleteLinea
};
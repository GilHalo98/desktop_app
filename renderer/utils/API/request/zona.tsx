// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetZona = async (
    parametros: {
        limit: number,
        offset: number,
        id: number,
        nombreZona: string
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.ZONA.CONSULTA,
        params: parametros
    });
};

const PostZona = async (
    body: {
        nombreZona: string,
        descripcionZona: string
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.ZONA.REGISTRAR,
        data: body
    });
};

const PutZona = async (
    body: {
        id: number,
        nombreZona: string,
        descripcionZona: string
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.ZONA.MODIFICAR,
        data: body
    });
};

const DeleteZona = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.ZONA.ELIMINAR,
        params: parametros
    });
};

export {
    GetZona,
    PostZona,
    PutZona,
    DeleteZona
};
// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const GetRol = async (
    parametros: {
        limit: number,
        offset: number,
        id: number,
        rolTrabajador: string,
        descripcionRol: string,
        idPermisoVinculado: number
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.ROL.CONSULTA,
        params: parametros
    });
};

const PostRol = async (
    body: {
        rolTrabajador: string,
        descripcionRol: string,
        idPermisoVinculado: number
    }
) => {
    return axios({
        method: 'post',
        url: ENDPOINTS.ROL.REGISTRAR,
        data: body
    });
};

const PutRol = async (
    body: {
        id: number,
        rolTrabajador: string,
        descripcionRol: string,
        idPermisoVinculado: number
    }
) => {
    return axios({
        method: 'put',
        url: ENDPOINTS.ROL.MODIFICAR,
        data: body
    });
};

const DeleteRol = async (
    parametros: {
        id: number,
    }
) => {
    return axios({
        method: 'delete',
        url: ENDPOINTS.ROL.ELIMINAR,
        params: parametros
    });
};

export {
    GetRol,
    PostRol,
    PutRol,
    DeleteRol
};
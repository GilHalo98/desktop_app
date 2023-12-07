// Importa la libreria para las consultas.
import axios from "axios";

// Importamos los endpoints
import { ENDPOINTS } from "../endpoints";

const PruebaCarga = async (
    parametros: {
    }
) => {
    return axios({
        method: 'get',
        url: ENDPOINTS.PRUEBAS.CARGA,
        params: parametros
    });
};

export {
    PruebaCarga
};
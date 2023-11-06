// Importa la libreria para las querrys.
import axios from "axios";

// Variables del entorno.
const API_PORT = process.env.API_PORT;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const getZonas = async (
    limit: any, offset: any,
    setListaRegistros: any,
    setTotalPaginas: any,
    nombreZona: any,
    lineaPerteneciente: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'zona/consultar',
        params: {
            offset: offset,
            limit: limit,
            nombreZona: nombreZona,
            idLineaVinculada: lineaPerteneciente
        }
    });

    // Guardamos los registros en la lista.
    setListaRegistros(registrosResponse.data.registros);

    // Guardamos el total de paginas en la variable.
    setTotalPaginas(Math.ceil(registrosResponse.data.totalRegistros / limit));
};

const getLineas = async (setLineasPertenecientes) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'linea/consultar',
    });

    // Guardamos los registros.
    setLineasPertenecientes(registrosResponse.data.registros);
};

const registrarZona = async (
    nombreZona: string,
    descripcionZona: string,
    idLineaVinculada: number,
) => {
    const registroResponse = await axios({
        method: 'post',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'zona/registrar',
        data: {
            nombreZona: nombreZona,
            descripcionZona: descripcionZona,
            idLineaVinculada: idLineaVinculada
        }
    });
};

const modificarZona = async (
    idRegistro: string,
    nombreZona: string,
    descripcionZona: string,
    idLineaVinculada: string,
) => {
    const registroResponse = await axios({
        method: 'put',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'zona/modificar',
        data: {
            id: idRegistro,
            nombreZona: nombreZona,
            descripcionZona: descripcionZona,
            idLineaVinculada: idLineaVinculada
        }
    });
};

const eliminarZona = async (
    idRegistro: number
) => {
    // Removemos el registro.
    const registrosResponse = await axios({
        method: 'delete',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'zona/eliminar',
        params: {
            id: idRegistro,
        }
    });
};

export {
    getZonas,
    getLineas,
    registrarZona,
    modificarZona,
    eliminarZona
};
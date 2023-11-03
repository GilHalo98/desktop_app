// Importa la libreria para las querrys.
import axios from "axios";

// Variables del entorno.
const API_PORT = process.env.API_PORT;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const getStatus = async (
    limit: any, offset: any,
    setListaRegistros: any,
    setTotalPaginas: any,
    dataMatrix: any,
    idEstadoVinculado: any,
    idTipoStatusVinculado: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'status/consultar',
        params: {
            offset: offset,
            limit: limit,
            dataMatrix: dataMatrix,
            idEstadoVinculado: idEstadoVinculado,
            idTipoStatusVinculado: idTipoStatusVinculado
        }
    });

    // Guardamos los registros en la lista.
    setListaRegistros(registrosResponse.data.registros);

    // Guardamos el total de paginas en la variable.
    setTotalPaginas(Math.ceil(registrosResponse.data.totalRegistros / limit));
};

const getTipoStatus = async (
    setListaTiposStatus: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'tipoStatus/consultar',
    });

    // Guardamos los registros en la lista.
    setListaTiposStatus(registrosResponse.data.registros);
};

const getEstadosStatus = async (
    setListaEstadosStatus: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'estadoStatus/consultar',
    });

    // Guardamos los registros en la lista.
    setListaEstadosStatus(registrosResponse.data.registros);
};

export {
    getStatus,
    getTipoStatus,
    getEstadosStatus
};
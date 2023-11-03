// Importa la libreria para las querrys.
import axios from "axios";

// Variables del entorno.
const API_PORT = process.env.API_PORT;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const getReportes = async (
    limit: any, offset: any,
    setListaRegistros: any,
    setTotalPaginas: any,
    dataMatrix: any,
    idZonaVinculada: any,
    idTipoReporteVinculado: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'reporte/consultar',
        params: {
            offset: offset,
            limit: limit,
            dataMatrix: dataMatrix,
            idZonaVinculada: idZonaVinculada,
            idTipoReporteVinculado: idTipoReporteVinculado,
        }
    });

    // Guardamos los registros en la lista.
    setListaRegistros(registrosResponse.data.registros);

    // Guardamos el total de paginas en la variable.
    setTotalPaginas(Math.ceil(registrosResponse.data.totalRegistros / limit));
};

const getZonas = async (
    setListaZonas: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'zona/consultar',
    });

    // Guardamos los registros en la lista.
    setListaZonas(registrosResponse.data.registros);
};

const getTiposReporte = async (
    setListaTiposReporte: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'tipoReporte/consultar',
    });

    // Guardamos los registros en la lista.
    setListaTiposReporte(registrosResponse.data.registros);
};

export {
    getReportes,
    getZonas,
    getTiposReporte
};
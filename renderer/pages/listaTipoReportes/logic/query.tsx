// Importa la libreria para las querrys.
import axios from "axios";

// Variables del entorno.
const API_PORT = process.env.API_PORT;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const getTiposReporte = async (
    limit: any, offset: any,
    setListaRegistros: any,
    setTotalPaginas: any,
    descripcionTipoReporte: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'tipoReporte/consultar',
        params: {
            offset: offset,
            limit: limit,
            descripcionTipoReporte: descripcionTipoReporte
        }
    });

    // Guardamos los registros en la lista.
    setListaRegistros(registrosResponse.data.registros);

    // Guardamos el total de paginas en la variable.
    setTotalPaginas(Math.ceil(registrosResponse.data.totalRegistros / limit));
};

const registrarTipoReporte = async (
    descripcionTipoReporte: string
) => {
    // Realizamos el registro
    const registrosResponse = await axios({
        method: 'post',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'tipoReporte/registrar',
        data: {
            descripcionTipoReporte: descripcionTipoReporte
        }
    });
};

const actualizarTipoReporte = async (
    idRegistro: string,
    descripcionTipoReporte: string
) => {
    // Realizamos el registro
    const registrosResponse = await axios({
        method: 'put',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'tipoReporte/modificar',
        data: {
            id: idRegistro,
            descripcionTipoReporte: descripcionTipoReporte
        }
    });
};

const eliminarTipoReporte = async (
    idRegistro: string,
) => {
    // Realizamos el registro
    const registrosResponse = await axios({
        method: 'delete',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'tipoReporte/eliminar',
        params: {
            id: idRegistro,
        }
    });
};

export {
    getTiposReporte,
    registrarTipoReporte,
    actualizarTipoReporte,
    eliminarTipoReporte
};
// Importa la libreria para las querrys.
import axios from "axios";

// Variables del entorno.
const API_PORT = process.env.API_PORT;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const getSeguimientoPiezas = async (
    limit: any, offset: any,
    setListaRegistros: any,
    setTotalPaginas: any,
    idLineaVinculada: any,
    dataMatrix: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'dashboard/seguimiento/piezas',
        params: {
            offset: offset,
            limit: limit,
            idLineaVinculada: idLineaVinculada,
            dataMatrix: dataMatrix
        }
    });

    // Guardamos los registros en la lista.
    setListaRegistros(registrosResponse.data.registros);

    // Guardamos el total de paginas en la variable.
    setTotalPaginas(Math.ceil(registrosResponse.data.totalRegistros / limit));
};

const getLineas = async (
    setLineasPertenecientes: any,
    setLinea:any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'linea/consultar',
    });

    // Guardamos los registros.
    setLineasPertenecientes(registrosResponse.data.registros);

    // Inicializamos la linea a mostrar.
    setLinea(registrosResponse.data.registros[0].id);
};

const buscarLineaZona = async (
    dataMatrix: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'dashboard/buscar/lineaZona',
        params: {
            dataMatrix: dataMatrix
        }
    });
};

export {
    getSeguimientoPiezas,
    getLineas,
    buscarLineaZona
};
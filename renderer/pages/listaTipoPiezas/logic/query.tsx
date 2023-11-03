// Importa la libreria para las querrys.
import axios from "axios";

// Variables del entorno.
const API_PORT = process.env.API_PORT;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const getTiposPieza = async (
    limit: any, offset: any,
    setListaRegistros: any,
    setTotalPaginas: any,
    descripcionTipoPieza: any
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'tipoPieza/consultar',
        params: {
            offset: offset,
            limit: limit,
            descripcionTipoPieza: descripcionTipoPieza
        }
    });

    // Guardamos los registros en la lista.
    setListaRegistros(registrosResponse.data.registros);

    // Guardamos el total de paginas en la variable.
    setTotalPaginas(Math.ceil(registrosResponse.data.totalRegistros / limit));
};

export {
    getTiposPieza
};
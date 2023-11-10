const getLineas = async (
    limit: any, offset: any,
    setListaRegistros: any,
    setTotalPaginas: any,
    nombreLinea: string
) => {
    // Realizamos la consulta de los registros registrados.
    const registrosResponse = await axios({
        method: 'get',
        url: ENDPOINTS.LINEA.CONSULTA,
        params: {
            offset: offset,
            limit: limit,
            nombreLinea: nombreLinea
        }
    });

    // Guardamos los registros en la lista.
    setListaRegistros(registrosResponse.data.registros);

    // Guardamos el total de paginas en la variable.
    setTotalPaginas(Math.ceil(registrosResponse.data.totalRegistros / limit));
};

const registrarLinea = async (
    nombreLinea: string,
    descripcionLinea: string
) => {
    // Realizamos el registro.
    const registrosResponse = await axios({
        method: 'post',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'linea/registrar',
        data: {
            nombreLinea: nombreLinea,
            descripcionLinea: descripcionLinea
        }
    });
};

const eliminarLinea = async (
    idRegistro: number
) => {
    // Removemos el registro.
    const registrosResponse = await axios({
        method: 'delete',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'linea/eliminar',
        params: {
            id: idRegistro,
        }
    });
};

const modificarLinea = async (
    idRegistro: number,
    nombreLinea: string,
    descripcionLinea: string
) => {
    // Removemos el registro.
    const registrosResponse = await axios({
        method: 'put',
        url: 'http://' + API_HOST + ':' + API_PORT + API_URL + 'linea/modificar',
        data: {
            id: idRegistro,
            nombreLinea: nombreLinea,
            descripcionLinea: descripcionLinea
        }
    });
};

export {
    getLineas,
    registrarLinea,
    eliminarLinea,
    modificarLinea
};
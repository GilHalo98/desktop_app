function formatearDatosBusquedaPieza(pieza: any) {
    // Generamos una lista auxiliar para darle formato al registro de registros.
    const registros: any = [];
    const datos = [];
    const metadatos = Object();

    if(pieza) {
        datos.push(pieza.dataMatrix);
        if(pieza.tipoPieza) {
            datos.push(pieza.tipoPieza.descripcionTipoPieza);
        }

        if(pieza.zona) {
            datos.push(pieza.zona.nombreZona);
            if(pieza.zona.linea) {
                datos.push(pieza.zona.linea.nombreLinea);
            }
        }
        metadatos.id = pieza.id;
    }

    // Reformateamos los datos y lo guardamos en la lista de registros.
    registros.push({
        data: datos,
        metadata: metadatos
    });

    return registros;
};

function formatearDatos(listaRegistros: any) {
    // Generamos una lista auxiliar para darle formato al registro de registros.
    const registros: any = [];

    // Por cada registro de registro.
    for (let i = 0; i < listaRegistros.length; i++) {
        // Recuperamos el registro.
        const registro = listaRegistros[i];

        const datos = [
            registro.nombreZona
        ];

        if(registro.pieza) {
            datos.push(registro.pieza.dataMatrix);
            if(registro.pieza.tipoPieza) {
                datos.push(registro.pieza.tipoPieza.descripcionTipoPieza);
            }
            if(registro.pieza.reportes) {
                datos.push(registro.pieza.reportes[registro.pieza.reportes.length - 1].descripcionReporte);
                if(registro.pieza.reportes[registro.pieza.reportes.length - 1].tipoReporte) {

                    datos.push(registro.pieza.reportes[registro.pieza.reportes.length - 1].tipoReporte.descripcionTipoReporte);
                }
            }
        } else {
            datos.push('');
            datos.push('');
            datos.push('');
            datos.push('');
        }

        // Reformateamos los datos y lo guardamos en la lista de registros.
        registros.push({
            data: datos,

            metadata: {
                id: registro.id,
            }
        });
    }

    return registros;
};

function selectorColor(metadata: any) {
    return '';
};

export {
    formatearDatosBusquedaPieza,
    formatearDatos,
    selectorColor
};
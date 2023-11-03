function formatearDatos(listaRegistros: any) {
    // Generamos una lista auxiliar para darle formato al registro de registros.
    const registros: any = [];

    // Por cada registro de registro.
    for (let i = 0; i < listaRegistros.length; i++) {
        // Recuperamos el registro.
        const registro = listaRegistros[i];

        // Reformateamos los datos y lo guardamos en la lista de registros.
        registros.push({
            data: [
                registro.id,
                registro.dataMatrix,
                registro.tipoPieza.descripcionTipoPieza,
                registro.fechaRegistroPieza,
                registro.fechaActualizacionPieza,
            ],
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
    formatearDatos,
    selectorColor
};
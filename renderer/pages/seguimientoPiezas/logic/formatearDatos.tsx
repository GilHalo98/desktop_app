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
            datos.push(registro.pieza.tipoPieza.descripcionTipoPieza);
            datos.push('');
        } else {
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
    formatearDatos,
    selectorColor
};
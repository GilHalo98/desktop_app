// Funcion para mostrar el modal de opciones de la tabla.
function toggleModalOpciones(
    estadoModalOpcionesTabla: boolean,
    setEstadoModalOpcionesTabla: Function
) {
    setEstadoModalOpcionesTabla(!estadoModalOpcionesTabla);
}

// Funcion que muestra el modal para registrar un nuevo dato.
function toggleModalRegistro(
    estadoModalRegistroTabla: boolean,
    setEstadoModalRegistroTabla: Function
) {
    setEstadoModalRegistroTabla(!estadoModalRegistroTabla);
}

function toggleModalRemoverRegistro(
    estadoModalRemoverRegistro: boolean,
    setEstadoModalRemoverRegistro: Function
) {
    setEstadoModalRemoverRegistro(!estadoModalRemoverRegistro);
}

function toggleModalModificarRegistro(
    estadoModalModificarRegistro: boolean,
    setEstadoModalModificarRegistro: Function
) {
    setEstadoModalModificarRegistro(!estadoModalModificarRegistro);
}

export {
    toggleModalOpciones,
    toggleModalRegistro,
    toggleModalRemoverRegistro,
    toggleModalModificarRegistro
};
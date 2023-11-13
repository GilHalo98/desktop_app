import { toggleModalRegistro } from "./toggleModals";

// Funcion de registro.
function registrarDato(
    refresh: boolean,
    nombreEstado: string,
    registrarLinea: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    registrarLinea(nombreEstado);
    toggleModalRegistro();
    setRefresh(!refresh);
};

function eliminarDato(
    refresh: boolean,
    idRegistro: number,
    setRefresh: Function,
    removerLinea: Function,
    toggleModalRemoverRegistro: Function
) {
    toggleModalRemoverRegistro();
    removerLinea(idRegistro);
    setRefresh(!refresh);
};

function modificarDato(
    refresh: boolean,
    idRegistro: number,
    nombreEstado: string,
    modificarRegistro: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    modificarRegistro(
        idRegistro,
        nombreEstado
    );
    toggleModalRegistro();
    setRefresh(!refresh);
};

export {
    registrarDato,
    eliminarDato,
    modificarDato
};
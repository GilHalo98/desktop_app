import { toggleModalRegistro } from "./toggleModals";

// Funcion de registro.
function registrarDato(
    refresh: boolean,
    descripcionDeTipoReporte: string,
    registrarTipoReporte: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    registrarTipoReporte(descripcionDeTipoReporte);
    toggleModalRegistro();
    setRefresh(!refresh);
};

function eliminarDato(
    refresh: boolean,
    idRegistro: number,
    setRefresh: Function,
    removerTipoReporte: Function,
    toggleModalRemoverRegistro: Function
) {
    toggleModalRemoverRegistro();
    removerTipoReporte(idRegistro);
    setRefresh(!refresh);
};

function modificarDato(
    refresh: boolean,
    idRegistro: number,
    descripcionDeTipoReporte: string,
    modificarRegistro: Function,
    setRefresh: Function,
    toggleModalRegistro: Function
) {
    modificarRegistro(
        idRegistro,
        descripcionDeTipoReporte
    );
    toggleModalRegistro();
    setRefresh(!refresh);
};

export {
    registrarDato,
    eliminarDato,
    modificarDato
};
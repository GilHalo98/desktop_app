// Variables del entorno.
const API_PORT = process.env.API_PORT;
const API_HOST = process.env.API_HOST;
const API_URL = process.env.API_URL;

const BASE = 'http://'
    + API_HOST
    + ':'
    + API_PORT
    + API_URL;

const URL_GENERALES = {
    /*
     * Endpoints generales de la api. 
     */

    ZONA: 'zona/',
    LINEA: 'linea/',
    PIEZA: 'pieza/',
    STATUS: 'status/',
    REPORTE: 'reporte/',
    DASHBOARD: 'dashboard/',
    TIPO_PIEZA: 'tipoPieza/',
    TIPO_STATUS: 'tipoStatus/',
    TIPO_REPORTE: 'tipoReporte/',
    ESTADO_STATUS: 'estadoStatus/',

};

const ENDPOINTS = {
    /*
     * Endpoints de la API.
     */

    ZONA: {
        CONSULTA:
            BASE
            + URL_GENERALES.ZONA
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.ZONA
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.ZONA
            + 'modificar',

        ELIMINAR:
            + URL_GENERALES.ZONA
            + URL_GENERALES.ZONA
            + 'eliminar',
    },

    LINEA: {
        CONSULTA:
            BASE
            + URL_GENERALES.LINEA
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.LINEA
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.LINEA
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.LINEA
            + 'eliminar',
    },

    PIEZA: {
        CONSULTA:
            BASE
            + URL_GENERALES.PIEZA
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.PIEZA
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.PIEZA
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.PIEZA
            + 'eliminar',
    },

    STATUS: {
        CONSULTA:
            BASE
            + URL_GENERALES.STATUS
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.STATUS
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.STATUS
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.STATUS
            + 'eliminar',
    },

    REPORTE: {
        CONSULTA:
            BASE
            + URL_GENERALES.REPORTE
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.REPORTE
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.REPORTE
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.REPORTE
            + 'eliminar',
    },

    TIPO_PIEZA: {
        CONSULTA:
            BASE
            + URL_GENERALES.TIPO_PIEZA
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.TIPO_PIEZA
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.TIPO_PIEZA
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.TIPO_PIEZA
            + 'eliminar',
    },

    TIPO_STATUS: {
        CONSULTA:
            BASE
            + URL_GENERALES.TIPO_STATUS
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.TIPO_STATUS
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.TIPO_STATUS
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.TIPO_STATUS
            + 'eliminar',
    },

    TIPO_REPORTE: {
        CONSULTA:
            BASE
            + URL_GENERALES.TIPO_REPORTE
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.TIPO_REPORTE
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.TIPO_REPORTE
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.TIPO_REPORTE
            + 'eliminar',
    },

    ESTADO_STATUS: {
        CONSULTA:
            BASE
            + URL_GENERALES.ESTADO_STATUS
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.ESTADO_STATUS
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.ESTADO_STATUS
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.ESTADO_STATUS
            + 'eliminar',
    },
};

export {
    ENDPOINTS
};
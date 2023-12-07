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

    IOT: 'IoT/',
    PERMISO: 'permiso/',
    REPORTE: 'reporte/',
    ROL: 'rol/',
    TIPO_REPORTE: 'tipoReporte/',
    ZONA: 'zona/',
    EMPLEADO: 'empleado/',
    DASHBOARD: 'dashboard/',
    PRUEBAS: 'pruebas/'
};

const ENDPOINTS = {
    /*
     * Endpoints de la API.
     */

    IOT: {
        CONSULTA:
            BASE
            + URL_GENERALES.IOT
            + 'consultar',

        REGISTRAR: {
            DISPOSITIVO:
                BASE
                + URL_GENERALES.IOT
                + 'registrar/dispositivo',
        },

        MODIFICAR:
            BASE
            + URL_GENERALES.IOT
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.IOT
            + 'eliminar',
    },

    PERMISO: {
        CONSULTA:
            BASE
            + URL_GENERALES.PERMISO
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.PERMISO
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.PERMISO
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.PERMISO
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

    ROL: {
        CONSULTA:
            BASE
            + URL_GENERALES.ROL
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.ROL
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.ROL
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.ROL
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
            BASE
            + URL_GENERALES.ZONA
            + 'eliminar',
    },

    EMPLEADO: {
        CONSULTA:
            BASE
            + URL_GENERALES.EMPLEADO
            + 'consultar',

        REGISTRAR:
            BASE
            + URL_GENERALES.EMPLEADO
            + 'registrar',

        MODIFICAR:
            BASE
            + URL_GENERALES.EMPLEADO
            + 'modificar',

        ELIMINAR:
            BASE
            + URL_GENERALES.EMPLEADO
            + 'eliminar',
    },

    DASHBOARD: {
        ACCESOS_RECIENTES:
            BASE
            + URL_GENERALES.DASHBOARD
            + 'accesos',

        ACCESOS_POR_DIA: 
            BASE
            + URL_GENERALES.DASHBOARD
            + 'accesos/porDia',

        REPORTE_POR_TIPO:
            BASE
            + URL_GENERALES.DASHBOARD
            + 'reporte/porTipo'
    },

    PRUEBAS: {
        CARGA:
            BASE
            + URL_GENERALES.PRUEBAS
            + 'carga/'
    }
};

export {
    ENDPOINTS
};
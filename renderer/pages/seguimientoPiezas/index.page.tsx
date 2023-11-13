import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import TabLineas from './componentes/tabLineas';
import TablaSeguimiento from './componentes/tablaSeguimiento';

import {
    formatearDatos,
    formatearDatosBusquedaPieza
} from './logic/formatearDatos';

import {
    SeguimientoPiezas,
    BuscarPiezaEnSeguimiento
} from '../../utils/API/interface/dashboard';
import {
    ConsultaLinea
} from '../../utils/API/interface/linea';

export default function ListaLineasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [refresh, setRefresh] = React.useState(true);

    const [dataMatrix, setDataMatrix] = React.useState('');
    const [linea, setLinea] = React.useState();
    const [listaLineas, setListaLineas] = React.useState([]);
    const [piezaBuscada, setPiezaBuscada] = React.useState([]);

    // Declaramos el useEffect de react para actualizar
    // el contenido de la vista.
    React.useEffect(() => {
        SeguimientoPiezas(
            elementos,
            offset,
            linea,
            setListaRegistros,
            setTotalPaginas
        );
    }, [
        paginaActual,
        refresh,
        linea
    ]);

    React.useEffect(() => {
        BuscarPiezaEnSeguimiento(
            dataMatrix,
            setPiezaBuscada
        );
    }, [
        dataMatrix,
        refresh
    ]);

    React.useEffect(() => {
        ConsultaLinea(
            null,
            null,
            null,
            setListaLineas,
            null
        );

        if(listaLineas.length > 0) {
            setLinea(listaLineas[0].id);
        }
    }, []);

    function funcion() {
        setRefresh(!refresh)
    };

    // La pagina se refresca cada tiempo dado
    setTimeout(funcion, 1*1000);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={9} />

                <Container fluid>
                    <br/>

                    <Row>
                        <Col>
                            <TabLineas
                                titulo={'Lineas'}
                                setLinea={setLinea}
                                listaLineas={listaLineas}
                                lineaActiva={linea}
                                resetPaginaActual={setPaginaActual}
                                setOffset={setOffset}
                                setDataMatrix={setDataMatrix}
                                cabeceras={[
                                    'Data matrix',
                                    'Tipo de Pieza',
                                    'Linea',
                                    'Zona'
                                ]}
                                registros={
                                    formatearDatosBusquedaPieza(piezaBuscada)
                                }
                            />
                        </Col>
                    </Row>
                    
                    <br/>

                    <Row>
                        <Col>
                            <TablaSeguimiento
                                titulo={'Seguimiento de piezas en linea'}
                                cabeceras={[
                                    'Zona',
                                    'Data matrix',
                                    'Tipo de pieza',
                                    'Ultimo status de Pieza',
                                    'Estado del status',
                                ]}
                                registros={
                                    formatearDatos(listaRegistros)
                                }
                                paginaActual={paginaActual}
                                offset={offset}
                                elementos={elementos}
                                setPaginaActual={setPaginaActual}
                                setOffset={setOffset}
                                totalPaginas={totalPaginas}
                            >
                            </TablaSeguimiento>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

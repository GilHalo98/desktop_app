import React from 'react';

import Head from 'next/head';

import {
    Container, Row, Col,
    Card, CardBody, CardTitle, CardSubtitle, CardText
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import { getPiezas, getTiposPieza } from './logic/query';
import BarraBusqueda from '../../components/barraBusqueda/barraBusqueda';
import InputBusqueda from './componentes/inputBusqueda';

export default function ListaLineasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);

    const [dataMatrix, setDataMatrix] = React.useState('');
    const [tipoPieza, setTipoPieza] = React.useState([]);
    const [listaTiposPieza, setListaTiposPieza] = React.useState([]);

    // Declaramos el useEffect de react para actualizar
    // el contenido de la vista.
    React.useEffect(() => {
        getPiezas(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            dataMatrix,
            tipoPieza
        );
    }, [paginaActual, dataMatrix, tipoPieza]);

    React.useEffect(() => {
        getTiposPieza(setListaTiposPieza);
    }, []);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={5} />

                <Container fluid>
                    <br/>
                    
                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de piezas'}
                                cabeceras={[
                                    'ID',
                                    'Data matrix',
                                    'tipo de pieza',
                                    'Fecha de registro',
                                    'Última modificación en',
                                ]}
                                registros={formatearDatos(listaRegistros)}
                                paginaActual={paginaActual}
                                offset={offset}
                                elementos={elementos}
                                setPaginaActual={setPaginaActual}
                                setOffset={setOffset}
                                totalPaginas={totalPaginas}
                                mostrarOpciones
                            >
                                <BarraBusqueda
                                    tituloBoton='Buscar Pieza'
                                >
                                    <InputBusqueda
                                        setDataMatrix={setDataMatrix}
                                        setTipoPieza={setTipoPieza}
                                        listaTiposPieza={listaTiposPieza}
                                    />
                                </BarraBusqueda>
                            </Tabla>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

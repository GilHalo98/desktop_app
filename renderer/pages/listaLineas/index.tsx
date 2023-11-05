import React from 'react';

import Head from 'next/head';

import {
    Input,
    Container, Row, Col,
} from 'reactstrap';

import SideBar from '../../components/sidebar/sidebar';
import Tabla from '../../components/tabla/tabla';

import { formatearDatos } from './logic/formatearDatos';
import { getLineas } from './logic/query';
import BarraBusqueda from '../../components/barraBusqueda/barraBusqueda';
import InputBusqueda from './componentes/inputBusqueda';

export default function ListaLineasPage() {
    // Declaramos los hookers que vamos a usar.
    const [listaRegistros, setListaRegistros] = React.useState([]);
    const [offset, setOffset] = React.useState(0);
    const [elementos, setElementos] = React.useState(12);
    const [totalPaginas, setTotalPaginas] = React.useState(1);
    const [paginaActual, setPaginaActual] = React.useState(1);
    const [nombreLinea, setNombreLinea] = React.useState('');

    // Declaramos el useEffect de react para actualizar
    // el contenido de la vista.
    React.useEffect(() => {
        getLineas(
            elementos,
            offset,
            setListaRegistros,
            setTotalPaginas,
            nombreLinea
        );
    }, [paginaActual, nombreLinea]);

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={1} />

                <Container fluid>
                    <br/>

                    <Row>
                        <Col>
                            <Tabla
                                titulo={'Tabla de registros de lineas'}
                                cabeceras={[
                                    'ID',
                                    'Nombre de linea',
                                    'Descripcion de linea',
                                    'Fecha de registro',
                                    'Última modificación en'
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
                                    tituloBoton='Buscar Linea'
                                >
                                    <InputBusqueda
                                        setNombreLinea={setNombreLinea}
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

import React from 'react';
import Head from 'next/head';

import SideBar from '../../components/sidebar/sidebar';
import { BarChart, ProgressCircle, Subtitle, Title } from "@tremor/react";
import { Card, Col, Container, Row } from 'reactstrap';

import { ConteoPiezasPorTipo, PiezasOkRechazadas } from '../../utils/API/interface/dashboard';
import { ConsultaEstadoStatus } from '../../utils/API/interface/estadoStatus';
import { funcionRefresh } from './logic/refresh';


export default function HomePage() {
    const [reportePorTipo, setReportePorTipo] = React.useState();
    const [reportePorStatus, setReportePorStatus] = React.useState();
    const [estadosStatus, setEstadosStatus] = React.useState();

    const [refresh, setRefresh] = React.useState(true);
    const [tiempoRefresh, setTiempoRefresh] = React.useState(1);

    React.useEffect(() => {
        ConteoPiezasPorTipo(setReportePorTipo);

        PiezasOkRechazadas(setReportePorStatus);

        ConsultaEstadoStatus(null, null, null, setEstadosStatus, null);
    }, [refresh]);

    // La pagina se refresca cada tiempo dado.
    setTimeout(() => {
        funcionRefresh(refresh, setRefresh);
    }, tiempoRefresh*1000);

    function formatearEstadoStatus(rawData: Array<Object>) {
        const datos = [];

        if(rawData) {
            for (let i = 0; i < rawData.length; i++) {
                const estadoStatus = rawData[i];
                datos.push(estadoStatus['nombreEstado']);
            }
        }

        return datos;
    };

    function formatearColoresEstadoStatus(rawData: Array<Object>) {
        const datos = [];

        if(rawData) {
            for (let i = 0; i < rawData.length; i++) {
                const estadoStatus = rawData[i];
                datos.push("blue");
            }
        }

        return datos;
    };

    function formatearReportePorTipo(rawData: object) {
        const data = [];

        if(rawData) {
            const tiposPiezas = Object.keys(rawData);

            for (let i = 0; i < tiposPiezas.length; i++) {
                const tipoPieza = tiposPiezas[i];

                const registro = {
                    name: tipoPieza,
                    "Total de piezas procesadas": rawData[tipoPieza]
                };
                
                data.push(registro);
            }
        }

        return data;
    };

    function formatearReportePorStatus(rawData: {
        tipoStatus: object
    }) {
        const data = [];

        if(rawData) {
           const tiposStatus = Object.keys(rawData.tipoStatus);

           for (let i = 0; i < tiposStatus.length; i++) {
                const tipoStatus = tiposStatus[i];

                const estadosStatus =  Object.keys(rawData.tipoStatus[tipoStatus]);

                const registro = {
                    Pureba: tipoStatus,
                };

                for (let j = 0; j < estadosStatus.length; j++) {
                    const estadoStatus = estadosStatus[j];
                    registro[estadoStatus] = rawData.tipoStatus[tipoStatus][estadoStatus];
                }
                
                data.push(registro);
           }
        }

        return data;
    };

    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={0} />
                <Container fluid>
                    <br/>
                    <Row>
                        <Col>
                            <Card color='dark'>
                                <Title>
                                    Tipos de Piezas
                                </Title>
                                <Subtitle>
                                    Numero de piezas procesadas por tipo
                                </Subtitle>
                                <BarChart
                                    className="mt-6"
                                    data={formatearReportePorTipo(reportePorTipo)}
                                    index="name"
                                    categories={["Total de piezas procesadas"]}
                                    colors={["blue"]}
                                    yAxisWidth={48}
                                />
                            </Card>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col>
                           <Card color='dark'>
                                <Title>
                                    Estado de piezas por pruebas
                                </Title>
                                <Subtitle>
                                    Estado de las piezas por pruebas realizadas a estas.
                                </Subtitle>
                                <BarChart
                                    className="mt-6"
                                    data={formatearReportePorStatus(reportePorStatus)}
                                    index="Pureba"
                                    colors={formatearColoresEstadoStatus(reportePorStatus)}
                                    categories={formatearEstadoStatus(estadosStatus)}
                                />
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

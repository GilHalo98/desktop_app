import React from 'react';
import Head from 'next/head';

import SideBar from '../../components/sidebar/sidebar';
import { ProgressCircle } from "@tremor/react";
import { Col, Container, Row } from 'reactstrap';


export default function HomePage() {
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
                        <div className='bg-color-blue'>
                            grafico de prueba
                        <ProgressCircle
                            value={72}
                            radius={25}
                            strokeWidth={6}
                            tooltip="radius: 25, strokeWidth: 6"
                        />
                        </div>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

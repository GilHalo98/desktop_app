import React from 'react';
import Head from 'next/head';

import SideBar from '../../components/sidebar/sidebar';
import { Container, Row, Col } from 'reactstrap';

export default function HomePage() {
    return(
        <React.Fragment>
            <Head>
                <title>ProyectoDB</title>
            </Head>

            <main>
                <SideBar paginaActual={0} />
                <Container>
                    <br/>

                    <Row>
                        <Col>
                        </Col>
                    </Row>
                </Container>
            </main>
        </React.Fragment>
    );
};

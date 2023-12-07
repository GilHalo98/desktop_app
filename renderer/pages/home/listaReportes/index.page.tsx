'use client'

import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';

import {
    Container, Row, Col
} from 'reactstrap';

import TablaReportes from '../../../components/tablas/tablaReportes/tablaReportes';
import SideBarLayout from '../../../components/Layout/sideBarLayout';

export default function ListaReportes() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <TablaReportes/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

ListaReportes.getLayout = function(page) {
    return <SideBarLayout>{page}</SideBarLayout>;
};
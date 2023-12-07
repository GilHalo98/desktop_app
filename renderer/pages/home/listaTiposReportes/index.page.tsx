'use client'

// Componentes de reactstrap.
import { Container, Row, Col } from "reactstrap";

// Componentes propios.
import TablaTiposReportes from "../../../components/tablas/tablaTiposReportes/tablaTiposReportes";
import React from "react";
import SideBarLayout from "../../../components/Layout/sideBarLayout";

export default function ListaPermisos() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <TablaTiposReportes/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

ListaPermisos.getLayout = function(page) {
    return <SideBarLayout>{page}</SideBarLayout>;
};
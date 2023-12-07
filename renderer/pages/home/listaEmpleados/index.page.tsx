'use client'

// Componentes de reactstrap.
import { Container, Row, Col } from "reactstrap";

// Componentes propios.
import TablaEmpleados from "../../../components/tablas/tablaEmpleados/tablaEmpleados";
import React from "react";
import SideBarLayout from "../../../components/Layout/sideBarLayout";

export default function ListaEmpleados() {
    return (
        <React.Fragment>
            <Container fluid>
                <Row>
                    <Col>
                        <TablaEmpleados/>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    );
};

ListaEmpleados.getLayout = function(page) {
    return <SideBarLayout>{page}</SideBarLayout>;
};
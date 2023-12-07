'use client'

import React from 'react';

import {
    Container, Row, Col,
    Input, Label
} from 'reactstrap';

import {
    ConsultaTipoReporte
} from '../../utils/API/interface/tipoReporte'

export default function InputBusquedaReporte(
    props: {
        setIdTipoReporte: Function,
        setIdReporte: Function
    }
) {
    const [listaTiposReportes, setListaTiposReportes] = React.useState([]);

    React.useEffect(() => {
        ConsultaTipoReporte(
            null,
            null,
            null,
            null,
            setListaTiposReportes,
            () => {}
        );
    }, []);

    return(
        <Container>
            <Row>
                <Col>
                    <Input
                        id="idReporte"
                        placeholder="ID del reporte"
                        type="text"
                        onChange={(input) => {
                            var id = null;
                            if(input.target.value) {
                                id = parseInt(input.target.value)
                            }
                            props.setIdReporte(id);
                        }}
                    />
                </Col>

                <Col>
                    <Input
                        id="tipoReporte"
                        type="select"
                        onChange={(input) => {
                            console.log(input.target.value);
                            props.setIdTipoReporte(input.target.value);
                        }}
                    >
                        <option value={''}>
                            Todos
                        </option>

                        {listaTiposReportes.map((registro: any) => {
                            return(
                                <option value={registro.id}>
                                    {registro.descripcionTipoReporte}
                                </option>
                            );
                        })}
                    </Input>
                </Col>
            </Row>
        </Container>
    );
};
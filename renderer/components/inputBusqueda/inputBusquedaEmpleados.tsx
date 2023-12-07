'use client'


import {
    Container, Row, Col,
    Input, Label
} from 'reactstrap';

export default function InputBusquedaEmpleados(
    props: {
        setIdEmpleado: Function,
        setNombresEmpleado: Function,
        setContactoEmpleado: Function
    }
) {
    return(
        <Container>
            <Row>
                <Col>
                    <Input
                        id="idEmpleado"
                        placeholder="ID del empelado"
                        type="number"
                        onChange={(input) => {
                            var id = null;
                            if(input.target.value) {
                                id = parseInt(input.target.value)
                            }
                            props.setIdEmpleado(id);
                        }}
                    />
                </Col>

                <Col>
                    <Input
                        id="nombresEmpleado"
                        placeholder="Nombres del empleado"
                        type="text"
                        onChange={(input) => {
                            props.setNombresEmpleado(input.target.value);
                        }}
                    />
                </Col>

                <Col>
                    <Input
                        id="contactoEmpleado"
                        placeholder="Contacto del empleado"
                        type="text"
                        onChange={(input) => {
                            props.setContactoEmpleado(input.target.value);
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
'use client'


import {
    Container, Row, Col,
    Input, Label
} from 'reactstrap';

export default function ModalRegistroRol(
    props: {
        setIdRol: Function,
        setRolTrabajador: Function
    }
) {
    return(
        <Container>
            <Row>
                <Col>
                    <Input
                        id="idRol"
                        placeholder="ID del rol"
                        type="number"
                        onChange={(input) => {
                            var id = null;
                            if(input.target.value) {
                                id = parseInt(input.target.value)
                            }
                            props.setIdRol(id);
                        }}
                    />
                </Col>

                <Col>
                    <Input
                        id="rolTrabajador"
                        placeholder="Nombre del Rol"
                        type="text"
                        onChange={(input) => {
                            props.setRolTrabajador(input.target.value);
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
};
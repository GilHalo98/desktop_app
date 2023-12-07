'use client'

import {
    Container, Row, Col,
    Form, FormGroup, Input, Label, Spinner
} from 'reactstrap';

export default function InputLogin(
    props: {
        setUserName: Function,
        setPassword: Function,
        enCarga: boolean
    }
) {

    const controlInput = {
        display: (props.enCarga? 'none' : '')
    };
    const controlSpinner = {
        display: (props.enCarga? '' : 'none')
    };

    return(
        <Container>
            <Row style={controlInput}>
                <Col sm='0' md='2'/>

                <Col sm='12' md='8'>
                    <Form>
                        <FormGroup>
                            <Input
                                className='inputLogin'
                                id="nombreUsuario"
                                name="nombreDeUsuario"
                                placeholder="Nombre de usuario"
                                type="text"
                                onChange={(input) => {
                                    props.setUserName(input.target.value);
                                }}
                            />
                        </FormGroup>

                        <FormGroup>
                            <Input
                                className='inputLogin'
                                id="passwordUsuario"
                                name="passwordDeUsuario"
                                placeholder="Contraseña de usuario"
                                type="password"
                                onChange={(input) => {
                                    props.setPassword(input.target.value);
                                }}
                            />
                        </FormGroup>
                    </Form>
                </Col>

                <Col sm='0' md='2'/>
            </Row>

            <Row style={controlSpinner}>
                <Col/>
                <Col xs='auto'>
                    <Spinner
                        color="warning"
                        style={{
                            height: '100px',
                            width: '100px'
                        }}
                    />
                </Col>
                <Col/>
            </Row>

            <br/>
        </Container>
    );
};
'use client'

import logo from '../public/images/logo.png'

// Componentes de reactstrap.
import {
    Card,
    Button,
    Container, Row, Col
} from "reactstrap";

// Componentes propios.
import React from "react";
import Image from 'next/image';
import Router from 'next/router';
import InputLogin from '../components/inputBusqueda/inputLogin';

import { PruebaDeCarga } from '../utils/API/interface/pruebas';
import RootLayout from '../components/Layout/rootLayout';
import AlertaTemporal from '../components/alertas/alertaTemporal';

export default function Login() {
    const [sesionValidada, setSesionValidada] = React.useState(-1);

    const [userName, setUserName] = React.useState();
    const [password, setPassword] = React.useState();

    const [enCarga, setEnCarga] = React.useState(false);

    return (
        <React.Fragment>
            <AlertaTemporal
                titulo='Credenciales invalidas'
                contenido='Credenciales no validas para el inicio de sesión, si tiene algún problema para iniciar sesión comuniquese con el encargado de sistemas'
                disparar={true}
                tiempoOff={4}
            />

            <Card className='cardLogin' color='dark'>
                <Container fluid>
                    <Row>
                        <Col/>
                        <Col xs="auto">
                            <h1 className='tituloLogin'>
                                <Image
                                    src={logo}
                                    height={120}
                                    width={162}
                                />
                                <br/>
                                AC Automatización
                                <div className='separadorTituloLogin'/>
                            </h1>
                        </Col>
                        <Col/>
                    </Row>
                    <br/>
                    <Row>
                        <InputLogin
                            setUserName={setUserName}
                            setPassword={setPassword}
                            enCarga={enCarga}
                        />
                    </Row>
                    <Row>
                        <Col sm='0' md='2'/>

                        <Col sm='12' md='8' >
                            <Button
                                block
                                outline
                                color='success'
                                onClick={() => {
                                    const cambioPagina = () => {
                                        Router.push('/home');
                                    };
                                    PruebaDeCarga(setEnCarga, cambioPagina);
                                    
                                }}
                            >
                                Iniciar sesión
                            </Button>
                        </Col>

                        <Col sm='0' md='2'/>
                    </Row>
                </Container>
            </Card>
        </React.Fragment>
    );
};

Login.getLayout = function(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    );
};
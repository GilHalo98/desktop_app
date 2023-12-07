import {
    Button,
    Container, Row, Col
} from 'reactstrap';

function mostrarAgregarRegistro(
    ocultarBotonRegistro: boolean,
    estadoModalAddRegistro: boolean,
    toggleModalAddRegistro: any
) {
    if(!ocultarBotonRegistro) {
        return(
            <Col>
                <Button
                    block
                    outline
                    size="sm"
                    color='primary'
                    active={estadoModalAddRegistro}
                    onClick={toggleModalAddRegistro}
                >
                    Agregar Registro
                </Button>
            </Col>
        );
    }
}

function thOpciones(activarOpciones: boolean) {
    if(activarOpciones) {
        return(
            <th key={'opciones'}>
                Opciones
            </th>
        );
    }
};

function tdOpciones(
    activarOpciones: boolean,
    idRegistro: number,
    toggleModalModificarRegistro: Function,
    toggleModalRemoverRegistro: Function
) {
    if(activarOpciones) {
        const keyTD = idRegistro + '-' + 'opciones';
        return(
            <td key={keyTD}>
                <Container>
                    <Row>
                        <Col sm={6}>
                            <Button
                                color='warning'
                                outline
                                onClick={() => {
                                    toggleModalModificarRegistro(idRegistro);
                                }}
                            >
                                M
                            </Button>
                        </Col>

                        <Col sm={6}>
                            <Button
                                color='danger'
                                outline
                                onClick={() => {
                                    toggleModalRemoverRegistro(idRegistro);
                                }}
                            >
                                R
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </td>
        );
    }
};

export {
    thOpciones,
    tdOpciones,
    mostrarAgregarRegistro
};
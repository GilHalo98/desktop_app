import './style.css';

import {
    Button,
    Card, CardBody, CardHeader, CardText, CardTitle,
    Col
} from 'reactstrap';
import { seleccionColor } from './logic/seleccionColorCard';

export default function CardEmpleado(
    props: any
) {
    // Seleccionamos el color dependiendo del tipo del card.
    const colorCard = seleccionColor(props.tipoCard);

    return(
        <Col className='rowEmpleado' sm={3}>
            <Card className='cardEmpleado' color={colorCard}>
                <CardHeader>
                    {props.elemento.nombres}

                    <Button>
                        M
                    </Button>
                    <Button>
                        R
                    </Button>
                </CardHeader>

                <CardBody>
                    <CardTitle>
                        {props.elemento.rol.descripcionRol}
                    </CardTitle>
                    
                    <CardText>
                        {props.elemento.rol.permiso.autorizacion}
                    </CardText>
                </CardBody>
            </Card>
        </Col>
    );
};
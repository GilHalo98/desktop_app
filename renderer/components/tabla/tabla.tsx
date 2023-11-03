import {
    Table,
    Card, CardBody, CardTitle, CardSubtitle, CardText, CardHeader
} from 'reactstrap';
import Paginacion from '../paginacion/paginacion';

export default function Tabla(
    props: any
) {
    return(
        <Card color='dark'>
            <CardHeader className='text-white'>
                {props.titulo}
            </CardHeader>

            <CardBody>
                <CardTitle>
                    {props.children}
                </CardTitle>

                <Table hover dark>
                    <thead>
                        <tr key="header">
                            {props.cabeceras.map((cabecera: any) => {
                                return(
                                    <th>
                                        {cabecera}
                                    </th>
                                );
                            })}
                        </tr>
                    </thead>

                    <tbody>
                        {props.registros.map((registro: any) => {
                            return(
                                <tr key={registro.metadata.id}>
                                    {registro.data.map((dato: any) => {
                                        return(
                                            <td>
                                                {dato}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </Table>

                <Paginacion
                    paginaActual={props.paginaActual}
                    offset={props.offset}
                    elementos={props.elementos}
                    setPaginaActual={props.setPaginaActual}
                    setOffset={props.setOffset}
                    totalPaginas={props.totalPaginas}
                />
            </CardBody>
        </Card>
    );
};
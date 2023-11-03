import {
    Table
} from 'reactstrap';

export default function ResultadoBusquedaPieza(
    props: any
) {
    return(
        <Table hover dark responsive>
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
    );
};
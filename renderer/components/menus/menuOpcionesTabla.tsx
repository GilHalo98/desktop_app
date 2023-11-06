import {
    Container, Row, Col,
    Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function MenuOpcionesTabla(
    props: {
        registrosPorPagina: number,
        setRegistrosPorPagina: Function,
        opcionesTabla: boolean,
        setOpcionesTabla: Function
        tiempoRefresh: number,
        setTiempoRefresh: Function
    }
) {
    return(
        <Form>
            <FormGroup>
                <Label for="registrosPagina">
                    Cantidad de registros por pagina
                </Label>

                <Input
                    id="registrosPagina"
                    name="registrosPorPagina"
                    value={props.registrosPorPagina}
                    type="number"
                    onChange={(input) => {
                        props.setRegistrosPorPagina(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup>
                <Label for="tiempoRefrescamiento">
                    Tiempo de refrescamiento de la pagina: {props.tiempoRefresh} segundos
                </Label>

                <Input
                    id="tiempoRefrescamiento"
                    name="tiempoDeRefrescamiento"
                    type="range"
                    value={props.tiempoRefresh}
                    onChange={(input) => {
                        props.setTiempoRefresh(input.target.value);
                    }}
                />
            </FormGroup>

            <FormGroup switch>
                <Input
                    type="switch"
                    role="switch"
                    checked={props.opcionesTabla}
                    onChange={() => {
                        props.setOpcionesTabla(!props.opcionesTabla);
                    }}
                />

                <Label check>
                    Mostrar opciones de registros
                </Label>
            </FormGroup>
        </Form>
    );
};
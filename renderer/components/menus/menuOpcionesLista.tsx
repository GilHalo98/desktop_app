import {
    Container, Row, Col,
    Input, Label,
    Form, FormGroup
} from 'reactstrap';

export default function MenuOpcionesLista(
    props: {
        tiempoRefresh: number,
        setTiempoRefresh: Function,
    }
) {

    return(
        <Form>
            <FormGroup>
                <Label for="tiempoRefrescamiento">
                    Tiempo de refrescamiento de la lista: {props.tiempoRefresh} segundos
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
        </Form>
    );
};
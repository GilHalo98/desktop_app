// Datos a usar en el componente.
import paginas from './logic/poblarSideBar';

// Componentes de React.
import {
    Nav, NavLink, NavItem
} from 'reactstrap';

export default function SideBar(
    props: any
) {
    return(
        <div className='barraNavegacion'>
            <Nav vertical pills fill>
                {paginas.map((pagina) => {
                    return(
                        <NavItem key={pagina.id}>
                            <NavLink
                                active={props.paginaActual == pagina.id ? true : false}
                                key={pagina.id}
                                href={pagina.url}
                                aria-current="page"
                            >
                                {pagina.descripcion}
                            </NavLink>
                        </NavItem>
                    );
                })}
            </Nav>
        </div>
    );
};
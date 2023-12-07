'use client'
import logo from '../../public/images/logo.png'
import Image from 'next/image';
// Datos a usar en el componente.
import paginas from './logic/poblarSideBar';
import { useRouter, push } from 'next/router';

// Componentes de React.
import {
    Nav, NavLink, NavItem, Button
} from 'reactstrap';

export default function SideBar(
    props: any
) {

    // Instanciamos un ruter.
    const ruter = useRouter();

    // Consultamos la pagina actual.
    const paginaActual = ruter.pathname;

    return(
        <div className='sidebar nav nav-pills flex-column bg-dark border-bottom border-body v-pills-tabContent'>
            <div>
                <Image
                    src={logo}
                    height={60}
                    width={81}
                />
            </div>

            <div className='separacionNavegacion'/>

            <Nav pills fill>
                {paginas.map((pagina) => {
                    return(
                        <NavItem key={pagina.id}>
                            <NavLink
                                active={paginaActual == pagina.url ? true : false}
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
            <br/>
            <Button
                className='botonLogout'
                color='warning'
                outline
                onClick={() => {
                    push('/');
                }}
                size='sm'
            >
                Log-Out
            </Button>
        </div>
    );
};
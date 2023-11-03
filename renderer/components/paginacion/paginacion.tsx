import React from 'react';

import { poblarPaginacion } from './logic/poblarPaginacion';
import { antPagina, paraPagina, sigPagina } from './logic/logicPaginacion';

export default function Paginacion(props: any) {
    // Generamos los botones de la paginacion.

    const paginas = poblarPaginacion(props.totalPaginas);

    return(
        <div className="container text-center">
            <div className='row'>
                <div className='col'>
                    <nav aria-label="...">
                        <ul className="pagination justify-content-center">
                            <li
                                className={"page-item " + (props.paginaActual == 1 ? 'disabled' : '')}
                                key="pagina-sig"
                            >
                                <a className="page-link" href="#" onClick={(() => {
                                    antPagina(
                                        props.paginaActual,
                                        props.offset,
                                        props.elementos,
                                        props.setPaginaActual,
                                        props.setOffset
                                    );
                                })}>
                                    Anterior
                                </a>
                            </li>

                            {paginas.map((pagina) => {
                                return(
                                    <li
                                        className={"page-item " + (pagina == props.paginaActual ? 'active' : '')}
                                        key={"pagina-" + pagina}
                                    >
                                        <a className="page-link" href="#" onClick={(() => {
                                            paraPagina(
                                                pagina,
                                                props.elementos,
                                                props.setPaginaActual,
                                                props.setOffset
                                            );
                                        })}>
                                            {pagina}
                                        </a>
                                    </li>
                                );
                            })}

                            <li
                                className={"page-item " + (props.paginaActual == props.totalPaginas ? 'disabled' : '')}
                                key="pagina-ant"
                            >
                                <a className="page-link" href="#" onClick={(() => {
                                    sigPagina(
                                        props.paginaActual,
                                        props.offset,
                                        props.elementos,
                                        props.setPaginaActual,
                                        props.setOffset
                                    );
                                })}>
                                    Siguiente
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};
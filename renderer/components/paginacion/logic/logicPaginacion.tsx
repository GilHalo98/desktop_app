function sigPagina(
    paginaActual: any, offset: any, elementos: any,
    setPaginaActual: any, setOffset: any
) {
    setPaginaActual(paginaActual + 1);
    setOffset(offset + elementos);
};

function antPagina(
    paginaActual: any, offset: any, elementos: any,
    setPaginaActual: any, setOffset: any
) {
    setPaginaActual(paginaActual - 1);
    setOffset(offset - elementos);
};

function paraPagina(
    pagina: any, elementos: any,
    setPaginaActual: any, setOffset: any
) {
    setPaginaActual(pagina);
    setOffset((pagina - 1) * elementos);
};

export {
    sigPagina,
    antPagina,
    paraPagina
};
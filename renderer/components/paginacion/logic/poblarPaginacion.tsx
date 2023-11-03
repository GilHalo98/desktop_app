function poblarPaginacion(totalPaginas: any) {
    var paginas = [];

    for(var i = 1; i <= totalPaginas; i++) {
        paginas.push(i)
    }

    return paginas;
};

export {
    poblarPaginacion,
};
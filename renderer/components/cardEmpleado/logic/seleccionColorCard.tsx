function seleccionColor(
    tipoCard: any
) {
    var colorCard;

    switch(tipoCard) {
        case 'nuevo':
            colorCard = 'success';
            break;

        case 'modificado':
            colorCard = 'primary';
            break;

        case 'rechazado':
            colorCard  = 'warning';
            break;

        case 'removido':
            colorCard = 'danger';
            break;
    
        default:
            break;
    }

    return colorCard;
};

export {
    seleccionColor
};
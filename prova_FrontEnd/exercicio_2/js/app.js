function mostrarPremio (posicao){
    switch (posicao) {
        case 1:
            console.log("1.000,00");
            break;
        case 2:
            console.log("800,00");
            break;
        case 3:
            console.log("500,00");
            break;
        default:
            console.log("Nota inválida!");
    }    
}
mostrarPremio(2);
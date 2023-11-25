function verificar() {
    cantidadSticker1 = parseInt(document.getElementById("sticker1").value) || 0;
    cantidadSticker2 = parseInt(document.getElementById("sticker2").value) || 0;
    cantidadSticker3 = parseInt(document.getElementById("sticker3").value) || 0;

    // Suma de los stickers
    totalStickers = cantidadSticker1 + cantidadSticker2 + cantidadSticker3;

    // Resultado en p
    totalPedido = document.getElementById("pedido"); 

    // verficacion de suma de los stickers
    if (totalStickers <= 10) {
        totalPedido.textContent = "Llevas " + totalStickers + " stickers.";
    } else {
        totalPedido.textContent = "Lo siento, llevas demasiados stickers.";
    }
}

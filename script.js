function carregar() { //função
    var msg = window.document.getElementById(`msg`)
    var img = window.document.getElementById(`imagem`)
    //declarando meus dois objetos
    var data = new Date()
    var hora = data.getHours() //hora atual
    var Min = data.getMinutes()
    
    msg.innerHTML = `Agora são ${hora}: ${Min} horas.`
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = `imagens/manha.jpg`
        document.body.style.background = `#e2cd9f`
    } else if (hora >= 12 && hora <18) {
        //BOA TARDE !
        img.src = `imagens/tarde.jpg`
        document.body.style.background = `#b9846f`
    } else {
        //BOA NOITE!
        img.src = `imagens/noite.jpg`
        document.body.style.background = `#515154`
    }
}

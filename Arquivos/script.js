
function carregar(){
   
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagen')
    var data = new Date()
    var hora = data.getHours()

    if(hora>=6 && hora<=12){
        img.src = "imagens/manha.png"
        document.body.style.background = '#e2cd9f'
        msg.innerHTML = `Agora são ${hora} horas da manha.`
    }
    else if(hora>=13 && hora<=19){
        img.src = "imagens/tarde.png"
        document.body.style.background = '#b9846f'
        msg.innerHTML = `Agora são ${hora} horas da tarde.`
    }
    else{
        img.src = "imagens/noite.png"
        document.body.style.background = '#515154'
        msg.innerHTML = `Agora são ${hora} horas da noite.`
    }
}


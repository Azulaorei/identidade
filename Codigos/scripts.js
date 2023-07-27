function verificar() {
    var anonasc = window.document.querySelector("input#ianonasc")
    var res = window.document.querySelector("p#resultado")
    var img = window.document.querySelector("img#foto")
    var erro = window.document.querySelector("p#erro")
    var erro2 = window.document.querySelector("p#erro2")
    var musica = window.document.querySelector("audio#musica")
    var anoatual = new Date()
    var ano = anoatual.getFullYear()
    var vanonasc = Number(anonasc.value)
    var genero = window.document.getElementsByName("radsex")
    var sexo = ''
    
    var idade = ano - vanonasc

    if (anonasc.value.length == 0 || vanonasc > 2023) {
        erro.style.display = 'block'
        erro.style.textAlign = 'center'
    }
    else if (vanonasc < 1918 && genero[0].checked) {
        erro2.innerHTML = `Muito velha para ser verdade!`
        erro2.style.display = 'block'
    }
    else if (vanonasc < 1918 && genero[1].checked) {
        erro2.innerHTML = "Muito velho para ser verdade!"
        erro2.style.display = 'block'
    }
    else {
        erro.style.display = 'none'
        erro2.style.display = 'none'

        if (genero[0].checked) {
            sexo = 'Mulher'
            res.innerHTML = `Você é uma mulher de ${idade} anos!`
            if (idade >= 0 && idade <= 14) {
                img.src = 'imagens/mulher_criança.jpg'
                img.style.display = 'block'
            }
            else if (idade > 15 && idade <= 50) {
                img.src = 'imagens/mulher_jovem.jpg'
                img.style.display = 'block'
            }
            else {
                img.src = 'imagens/mulher_idosa.jpg'
                img.style.display = 'block'
            } 
        }
        else if (genero[1].checked) {
            sexo = 'Homem'
            res.innerHTML = `Você é um sigma de ${idade} anos!`
            if (idade >= 0 && idade <= 14) {
                img.src = 'imagens/homen_criança.jpg'
                img.style.display = 'block'
                musica.play()
            }
            else if (idade >= 16 && idade <= 50) {
                img.src = 'imagens/homen_jovem.jpg'
                img.style.display = 'block'
                img.style.width = '290px'
                musica.play()
            }
            else {
                img.src = 'imagens/homen_idoso.jpg'
                img.style.display = 'block'
                musica.play()
            } 
        }
        res.style.textAlign = 'center'
    }
}
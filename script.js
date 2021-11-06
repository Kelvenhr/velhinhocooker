var nome = String(window.prompt('Olá, qual é o seu nome?'))
if (nome.length == 0 || nome == 'null') {
    while (nome.length <= 0 || nome == 'null') {
        var nome = String(window.prompt('Por favor, digite seu nome para continuar!'))
    }
}


var username = document.getElementById('username')

username.innerHTML += ` ${nome}`

function enviar() {
    var dinheiro = Number(document.getElementById('dinheiro').value)

    if (dinheiro < 3) {
        window.alert(`Dinheiro R$${dinheiro.toFixed(2)} insuficiente para comprar qualquer alimento`)
    } else {
        msg = document.getElementById('msg')
        msg.innerText = `Saldo de R$ ${dinheiro.toFixed(2).replace('.', ',')} adicionado com sucesso, escolha oque vai comer!`
        var here = document.getElementById('here')
        here.innerText = `Saldo: R$ ${dinheiro.toFixed(2).replace('.', ',')}`
    }
}


var lancheh = window.document.getElementById('lanche-h')
var lanchec = window.document.getElementById('lanche-c')
var lancher = window.document.getElementById('refrigerante')

fatura = {}
fatura.hamburguer = []
fatura.cachorro = []
fatura.refrigerante = []

lancheh.addEventListener('click', buyh)

function buyh() {
    dinheiro = Number(document.getElementById('dinheiro').value)
    var lista = document.getElementById('lista')
    h = 5.99
    if (dinheiro > h) {
        fatura['hamburguer'].push('hamburguer')
        alimento = document.createElement('option')
        alimento.innerText = 'Hamburguer R$ 5,99'
        lista.appendChild(alimento)
        if (fatura['hamburguer'].length == 1) {
            window.alert('Um hamburguer adicionado') 
        } else if (fatura.hamburguer.length > 1) {
            window.alert('Mais um hamburguer adicionado')
        }
    } else {
        window.alert('Dinheiro insuficiente')
    }

}

lanchec.addEventListener('click', buyc)

function buyc() {
    var dinheiro = Number(document.getElementById('dinheiro').value)
    var c = 4.99
    if (dinheiro > c) {
        fatura['cachorro'].push('cachorro')
        var lista = document.getElementById('lista')
        var alimento = document.createElement('option')
        alimento.innerText = 'Cachorro quente R$ 4,99'
        lista.appendChild(alimento)
        if (fatura['cachorro'].length == 1) {
            window.alert('Um cachorro quente foi adicionado')
        } else {
            window.alert('Mais um cachorro quente foi adicionado')
        }
    } else {
        window.alert('Dinheiro insuficiente')
    }
}

lancher.addEventListener('click', buyr)

function buyr() {
    var dinheiro = Number(window.document.getElementById('dinheiro').value)
    var lista = document.getElementById('lista')
    r = 2.99
    if (dinheiro > r) {
        fatura['refrigerante'].push('refrigerante')
        var alimento = document.createElement('option')
        alimento.innerText = 'Refrigerante R$ 2,99'
        lista.appendChild(alimento)
        if (fatura['refrigerante'].length == 1) {
            window.alert('Um refrigerante adicionado')
        } else {
            window.alert('Mais um refrigerante adicionado')
        }
    } else {
        window.alert('Dinheiro insuficiente')
    }
}

function pagar() {
    var dinheiro = Number(document.querySelector('input#dinheiro').value)
    total = 5.99 * fatura['hamburguer'].length
    total += 4.99 * fatura['cachorro'].length
    total += 2.99 * fatura['refrigerante'].length
    if (dinheiro > total) {
        dinheiro -= total
        var here = document.getElementById('here')
        here.innerText = `Saldo: R$ ${dinheiro.toFixed(2).replace('.', ',')}`
        window.alert(`R$ ${total.toFixed(2).replace('.', ',')} foi pago com sucesso seu novo saldo é ${dinheiro.toFixed(2).replace('.', ',')}, Volte sempre!`)
        var lista = document.getElementById('lista')
        lista.innerHTML = ''
    } else {
        window.alert('Por favor, adicione mais dinheiro para pagar.')
    }
}

var mobile = document.querySelector('div#mobile')

mobile.addEventListener('click', click)

function click() {
    var list = document.getElementsByTagName('ul')[0]
    if (list.style.transform == 'translateX(100%)') {
        list.style.transform = 'translateX(0%)'
    } else {
        list.style.transform = 'translateX(100%)'
    }

}
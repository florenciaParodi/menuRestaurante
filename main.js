// tarea: 3 funciones con parámetros todas, un for o un swithc almenos , console log, alert, prompt, arrays , interactuar con los arrays, variables
/* let bienvenida = prompt('¿Deseas ver el menú ?')
console.log(bienvenida)
let pedido = []
console.log(pedido) */

const hamburguesaBacon = { nombre: 'Hamburguesa Bacon', pan: 'Pan de Papa', medallon: 'Roast Beef', gr: 200, lechuga: true, tomate: true, cheddar: true, bacon: true, aderezo: true, valor: 9000 }
const hamburguesaCheddar = { nombre: 'Hamburguesa Cheddar', pan: 'Pan de Chipa', medallon: 'Roast Beef', gr: 200, lechuga: true, tomate: true, cheddar: true, bacon: false, aderezo: false, valor: 9000 }
const hamburguesaPollo = { nombre: 'Hamburguesa de Pollo', pan: 'Pan de Papa', medallon: 'Pollo Crispy', gr: 200, lechuga: true, tomate: true, cheddar: true, bacon: false, aderezo: false, valor: 9000 }
const hamburguesaVegana = { nombre: 'Hamburguesa Vegana', pan: 'Pan de Papa Vegano', medallon: 'Lentejas y Berenjena', gr: 200, lechuga: true, tomate: true, cheddar: false, bacon: false, aderezo: true, valor: 9000 }
const hamburguesaSinTacc = { nombre: 'Hamburguesa Sin TACC', pan: 'Pan de Harina de Arroz ', medallon: 'Roast Beef', gr: 200, lechuga: true, tomate: true, cheddar: false, bacon: false, aderezo: false, valor: 9000 }

const cocaCola = { nombre: 'Coca Cola Regular', ml: 500, light: false, valor: 1800, }
const cocaColaLight = { nombre: 'Coca Cola Light', ml: 500, light: true, valor: 1800, }
const fanta = { nombre: 'Fanta', ml: 500, light: false, valor: 1800, }
const spriteZero = { nombre: 'Sprite Zero', ml: 500, light: true, valor: 1800, }
const aguaSinGas = { nombre: 'Agua Sin Gas', ml: 500, light: true, valor: 2000, }
const aguaConGas = { nombre: 'Agua Con Gas', ml: 500, light: true, valor: 2000, }

const papasFritas = { nombre: 'Papas Fritas Clásicas', cheddar: false, aderezo: false, valor: 3500 }
const papasCheddar = { nombre: 'Papas Fritas con Cheddar', cheddar: true, aderezo: false, valor: 3500 }
const arosCebolla = { nombre: 'Aros de Cebolla', cheddar: false, aderezo: true, valor: 3500 }
const batatasFritas = { nombre: 'Batatas Fritas  ', cheddar: false, aderezo: false, valor: 3500 }

const hamburguesas = [hamburguesaBacon, hamburguesaCheddar, hamburguesaPollo, hamburguesaVegana, hamburguesaSinTacc]
const bebidas = [cocaCola, cocaColaLight, fanta, spriteZero, aguaSinGas, aguaConGas]
const acompaniamientos = [papasFritas, papasCheddar, arosCebolla, batatasFritas]

let productSection = document.getElementById('productos')
hamburguesas.forEach((hamburguesa) => {
    let productCard = document.createElement('div')
    productCard.className = 'card'
    productCard.innerHTML = `<b>${hamburguesa.nombre}</b><p> Detalles: ${hamburguesa.pan} -  Medallón : ${hamburguesa.medallon}, ${hamburguesa.gr}gr <p>$ ${hamburguesa.valor}</p><button id=restarUno>-</button><span id=contador>0</span><button id=sumarUno>+</button><button>Agregar al pedido</button>`
    productSection.appendChild(productCard)
})
bebidas.forEach((bebida) => {
    let productCard = document.createElement('div')
    productCard.className = 'card'
    productCard.innerHTML = `<b>${bebida.nombre}</b><p> ${bebida.ml}ml <p>$ ${bebida.valor}</p> <button>Agregar al pedido</button> `
    productSection.appendChild(productCard)
})
acompaniamientos.forEach((acompaniamiento) => {
    let productCard = document.createElement('div')
    productCard.className = 'card'
    productCard.innerHTML = `<b>${acompaniamiento.nombre}</b> <p>$ ${acompaniamiento.valor}</p> <button>Agregar al pedido</button>`
    productSection.appendChild(productCard)
})

let buscador = document.getElementById('searchBar')
buscador.innerHTML = '<label for="buscar">Buscar ...</label> <input type="search">'
buscador.onkeyup = () => {
    
}

let restarUno = document.getElementById('restarUno')
let sumarUno = document.getElementById('sumaruno')
let contador = document.genElementById('contador')
let cantidad = 0

sumarUno.onclick = () => {
    cantidad++
    contador.innerHTML = cantidad
}
restarUno.onclick = () => {
    cantidad--
    contador.innerHTML = cantidad
}

//carrito : tengo que crear unn elemento como un input que sea un contador y vaya agregando los productod pero que también permita ver una lista del pedido 
// botón de remove producto : botón eliminiar producto en cada producto del carrito y que sea .onclick, remove()
// on key up : cuando el usuario tipee una letra, ir mostrando resultados en el buscador en formato de lista
// contador si quiere poner el + y el - en cada producto : let contador = 0 y después, .onclick , click++ y mostrarlo en el input vacio




/* const mostrarMenuPrincipal = () => {
    if (bienvenida == 'si') {
        let respuesta = parseInt(prompt(`Selecciona una opción del menú.
            Coloca solo el número en tu respuesta:
            1 : Hamburguesas
            2 : Bebidas
            3 : Acompañamientos
            4 : Finalizar pedido`))
        mostrarOpcionElegida(respuesta)
        console.log(respuesta)
    }else if (bienvenida == 'no') {
        alert('Ok serás redirigido al inicio')
        console.log(bienvenida)
    } else {
        alert('Lo siento, esa no es una respuesta valida :(')
        console.log(bienvenida)
    }
}
mostrarMenuPrincipal();


function mostrarOpcionElegida(respuesta) {
    let menuElegido

    switch (respuesta) {
        case 1:
            menuElegido = hamburguesas
            break
        case 2:
            menuElegido = bebidas
            break
        case 3:
            menuElegido = acompaniamientos
            break
        case 4:
            finalizarPedido();
            break
    }

    let indice = 1
    let textoParaMostrar = ''

    for (item of menuElegido) {
        textoParaMostrar = textoParaMostrar + indice + ' - ' + item.nombre + ' , $ ' + item.valor + '\n'
        indice++
    }
    textoParaMostrar = textoParaMostrar + '0 - Volver al menú principal'

    let itemElegido = prompt(textoParaMostrar);

    if (itemElegido == 0) {
        mostrarMenuPrincipal();
    } else {
        agregarItemAlPedido(itemElegido, menuElegido)
        mostrarMenuPrincipal();
    }
}


function agregarItemAlPedido(itemElegido, menuElegido) {
    pedido.push(menuElegido[itemElegido - 1])
}

function finalizarPedido() {
    let valorTotal = 0
    for (producto of pedido) {
        valorTotal = valorTotal + producto.valor
    }
    alert(' El total de tu pedido es ' + valorTotal + '\n' + ' ¿Tarjeta o Efectivo?')
    pedido = []
    mostrarMenuPrincipal();
}

*/

// practicar lo nuevo visto hoy de objetos
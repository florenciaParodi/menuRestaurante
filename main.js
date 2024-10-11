// tarea: 3 funciones con parámetros todas, un for o un swithc almenos , console log, alert, prompt, arrays , interactuar con los arrays, variables
/* let bienvenida = prompt('¿Deseas ver el menú ?')
console.log(bienvenida)
let pedido = []
console.log(pedido) */

const hamburguesaBacon = { nombre: 'Hamburguesa Bacon', valor: 9000 }
const hamburguesaCheddar = { nombre: 'Hamburguesa Cheddar', valor: 9000 }
const hamburguesaPollo = { nombre: 'Hamburguesa de Pollo', valor: 9000 }
const hamburguesaVegana = { nombre: 'Hamburguesa Vegana',  valor: 9000 }
const hamburguesaSinTacc = { nombre: 'Hamburguesa Sin TACC', valor: 9000 }

const cocaCola = { nombre: 'Coca Cola Regular',valor: 1800, }
const cocaColaLight = { nombre: 'Coca Cola Light',valor: 1800, }
const fanta = { nombre: 'Fanta', valor: 1800, }
const spriteZero = { nombre: 'Sprite Zero', valor: 1800, }
const aguaSinGas = { nombre: 'Agua Sin Gas',valor: 2000, }
const aguaConGas = { nombre: 'Agua Con Gas', valor: 2000, }

const papasFritas = { nombre: 'Papas Fritas Clásicas', valor: 3500 }
const papasCheddar = { nombre: 'Papas Fritas con Cheddar', valor: 3500 }
const arosCebolla = { nombre: 'Aros de Cebolla', valor: 3500 }
const batatasFritas = { nombre: 'Batatas Fritas  ', valor: 3500 }

const productos = [hamburguesaBacon, hamburguesaCheddar, hamburguesaPollo, hamburguesaVegana, hamburguesaSinTacc, cocaCola, cocaColaLight, fanta, spriteZero, aguaSinGas, aguaConGas, papasFritas, papasCheddar, arosCebolla, batatasFritas]

let itemsAmostrar = [...productos]

let buscadorInput = document.createElement('input')
let buscadorLabel = document.createElement('label')
buscadorLabel.innerText = 'Buscar...'
buscadorLabel.setAttribute('for', 'searchInput')
buscadorInput.setAttribute('type', 'search')
buscadorInput.setAttribute('id', 'searchInput')
buscadorInput.addEventListener('change', event => {
    let text = event.target.value
    if (text.trim() !== ''){
        itemsAmostrar = productos.filter(producto => producto.nombre.toLowerCase().includes(text.toLowerCase().trim()))
    } else {
        itemsAmostrar = [...productos]
    }
    showMenu();
})
let buscador = document.getElementById('searchBar')
buscador.appendChild(buscadorLabel)
buscador.appendChild(buscadorInput)


let productSection = document.getElementById('productos')

const showMenu = () => {
    productSection.innerHTML = ''
    itemsAmostrar.forEach((producto) => {
        let productCard = document.createElement('div')
        productCard.className = 'card'
        productCard.innerHTML = `<b>${producto.nombre}</b><p>$ ${producto.valor}</p><button id=restarUno>-</button><span id=contador>0</span><button id=sumarUno>+</button><button>Agregar al pedido</button>`
        productSection.appendChild(productCard)
    })
}
showMenu();

let carrito = docuement.getElementById('cart')

/*let restarUno = document.getElementById('restarUno')
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
} */

//carrito : tengo que crear unn elemento como un input que sea un contador y vaya agregando los productos pero que también permita ver una lista del pedido 
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
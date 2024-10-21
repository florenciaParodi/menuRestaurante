// tarea: migrar todo a DOM y eventos, programar el circuito completo - uso de localStorage , 2 funciones de órden superior diferentes - array de objetos - 1 poco de CSS - nada de console, alert o prompt - los algoritmos deben ser invocados desde el HTML e interacturar con el contenido web : crear, leer y procesar datos (formularios, input)
//recomendación: armar array de objetos y recorrerlo para generar cards dinamicamente desde JS con el uso de DOM

const hamburguesaBacon = {id: 1, nombre: 'Hamburguesa Bacon', valor: 9000 }
const hamburguesaCheddar = {id: 2, nombre: 'Hamburguesa Cheddar', valor: 9000 }
const hamburguesaPollo = {id: 3,  nombre: 'Hamburguesa de Pollo', valor: 9000 }
const hamburguesaVegana = {id: 4, nombre: 'Hamburguesa Vegana',  valor: 9000 }
const hamburguesaSinTacc = {id: 5, nombre: 'Hamburguesa Sin TACC', valor: 9000 }
const cocaCola = {id: 6,  nombre: 'Coca Cola Regular',valor: 1800, }
const cocaColaLight = {id: 7, nombre: 'Coca Cola Light',valor: 1800, }
const fanta = {id: 8, nombre: 'Fanta', valor: 1800, }
const spriteZero = {id: 9, nombre: 'Sprite Zero', valor: 1800, }
const aguaSinGas = {id: 10, nombre: 'Agua Sin Gas',valor: 2000, }
const aguaConGas = {id: 11, nombre: 'Agua Con Gas', valor: 2000, }
const papasFritas = {id: 12, nombre: 'Papas Fritas Clásicas', valor: 3500 }
const papasCheddar = {id: 13, nombre: 'Papas Fritas con Cheddar', valor: 3500 }
const arosCebolla = {id: 14, nombre: 'Aros de Cebolla', valor: 3500 }
const batatasFritas = {id: 15, nombre: 'Batatas Fritas  ', valor: 3500 }

const productos = [hamburguesaBacon, hamburguesaCheddar, hamburguesaPollo, hamburguesaVegana, hamburguesaSinTacc, cocaCola, cocaColaLight, fanta, spriteZero, aguaSinGas, aguaConGas, papasFritas, papasCheddar, arosCebolla, batatasFritas]

let pedido = []


let productSection = document.getElementById('productos')

const mostrarMenu = () => {
    productSection.innerHTML = ''
    productos.forEach((producto) => {
        let productCard = document.createElement('div')
        productCard.className = 'card'
        productCard.innerHTML = `<b>${producto.nombre}</b><p>$ ${producto.valor}</p><button id=restarUno-${producto.id} >-</button><span id=contador-${producto.id}>1</span><button id=sumarUno-${producto.id}>+</button><button class="agregarButton" id="${producto.id}">Agregar al pedido</button>`
        productSection.appendChild(productCard)
    })
}
mostrarMenu();


let carritoHtml = document.getElementById('cart')

const mostrarCarrito = () => {
    carritoHtml.innerHTML = '';
    let total = 0
    pedido.forEach(item => {
        const carritoCard = document.createElement('div');
        carritoCard.className = 'carritoCard'
        carritoCard.innerHTML = `${item.id} <b>${item.nombre}</b> - $${item.valor} - Cantidad: ${item.cantidad} <button class="eliminar" onclick="eliminarProducto(${item.id})">Eliminar</Button>`;
        carritoHtml.appendChild(carritoCard);
        total = total + item.valor*item.cantidad
    });
    const totalAmostrar = document.createElement('div')
    totalAmostrar.className = 'totalAmostrar'
    totalAmostrar.innerHTML = `<p>Total: ${total}</p>`
    carritoHtml.appendChild(totalAmostrar)
}
mostrarCarrito();



const agregarAlCarrito = () => {
    const botonesAgregar = document.querySelectorAll('.agregarButton')
    botonesAgregar.forEach(boton => {
        boton.onclick = (e) => {
            const idProducto = e.currentTarget.id
            const productoSeleccionado = productos.find(producto => producto.id == idProducto)
            console.log(productoSeleccionado)
            let nuevoId
            if (pedido.length === 0) {
                nuevoId = 1
            } else {
                nuevoId = pedido[pedido.length -1].id + 1
            }
            pedido.push({...productoSeleccionado, id: nuevoId, cantidad: 1})
            mostrarCarrito();
        }
    })
}
agregarAlCarrito();

const agregarFuncionesAlContador = () => {
    let contador = document.querySelectorAll('contador')
}

function eliminarProducto(idProducto) {
    pedido = pedido.filter(producto => producto.id !== idProducto);
    mostrarCarrito();
}






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
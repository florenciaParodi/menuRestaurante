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
        productCard.innerHTML = 
        `<b>${producto.nombre}</b>
        <p>$ ${producto.valor}</p>
        <div class="buttons">
        <button class="cantidadButton" onclick="restarUno(${producto.id})">-</button>
        <span id="contador-${producto.id}">1</span>
        <button class="cantidadButton" onclick="sumarUno(${producto.id})">+</button>
        <button class="agregarButton" onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        </div>`
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
    totalAmostrar.innerHTML = `<p>Total: ${total}</p> <button id="comprarButton" onclick="finalizarPedido()">Finalizar pedido</button>`
    carritoHtml.appendChild(totalAmostrar)
}
mostrarCarrito();


function agregarAlCarrito(idProducto) {
    const contadorHtml = document.getElementById(`contador-${idProducto}`);
    const cantidad = parseInt(contadorHtml.innerText);

    const producto = productos.find(p => p.id === idProducto);
    const cartProducto = pedido.find(p => p.id === idProducto);

    if (cartProducto) {
        cartProducto.cantidad += cantidad;
    } else {
        pedido.push({ ...producto, cantidad: cantidad });
    }

    contadorHtml.innerText = 1

    mostrarCarrito();
}


function eliminarProducto(idProducto) {
    pedido = pedido.filter(producto => producto.id !== idProducto);
    mostrarCarrito();
}

function restarUno(idProducto) {
    const cantidadHtml = document.getElementById(`contador-${idProducto}`)
    const num = parseInt(cantidadHtml.innerText)
    if (num !== 1) {
        cantidadHtml.innerText = num - 1
    }
}

function sumarUno(idProducto) {
    const cantidadHtml = document.getElementById(`contador-${idProducto}`)
    const num = parseInt(cantidadHtml.innerText)
    cantidadHtml.innerText = num + 1
}



function finalizarPedido() {
    Toastify({
        text: "Gracias por tu compra",
        duration: 10000,
        gravity: "top", 
        position: "right",
        stopOnFocus: true,
        style: {
        background: "linear-gradient(to right, rgb(132, 25, 156), rgb(234, 234, 255))",
        color: "#ffffff",
        width: "300px",
        height: "50px",
        right: "0"
        }
    }).showToast();;

    carrito = [];
    guardarCarrito();
    crearCarrito();
    crearMenu();
}

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(pedido));
}

function cargarCarrito() {
    const carritoGuardado = localStorage.getItem('carrito');
    if (carritoGuardado) {
        carrito = JSON.parse(carritoGuardado);
    }
}

// la nueva a entregar es : circuito completo me falta boton de comprar en el carrito  y ticket, 2 archivos JS , 1 archivo JSON (clases 8 y 9) (1 fetch a json o/y api) . Array de objetos, si uso una API, igual paso el archivo a JSON o pasar mi menu a json. try -catch - finally local storage . ticket, medio de pago y mensaje de confirm. librerias JS (toastify por ej) no console, ni prompt ni alert.
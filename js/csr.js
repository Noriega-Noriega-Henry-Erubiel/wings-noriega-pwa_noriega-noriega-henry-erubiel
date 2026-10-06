// csr.js — Client Side Rendering: carga catalogo.json y pinta las tarjetas

const contenedor = document.getElementById('catalogo');
const estado = document.getElementById('estado');

// Arma el HTML de una tarjeta de producto
function crearTarjeta(producto) {
  return `
    <article class="tarjeta">
      <img src="${producto.imagen}" alt="${producto.nombre}" loading="lazy" width="600" height="450">
      <div class="tarjeta-cuerpo">
        <span class="categoria">${producto.categoria}</span>
        <h3>${producto.nombre}</h3>
        <p class="precio">$${producto.precio}</p>
        <button class="btn-agregar" data-id="${producto.id}">Agregar</button>
      </div>
    </article>
  `;
}

// Pide el catálogo con fetch() y lo muestra en la página
async function cargarCatalogo() {
  try {
    const respuesta = await fetch('catalogo.json');
    if (!respuesta.ok) {
      throw new Error('No se pudo cargar el catálogo');
    }
    const productos = await respuesta.json();

    contenedor.innerHTML = productos.map(crearTarjeta).join('');
    estado.textContent = `${productos.length} productos disponibles`;
  } catch (error) {
    estado.textContent = 'No se pudo cargar el catálogo. Intenta de nuevo.';
  }
}

cargarCatalogo();

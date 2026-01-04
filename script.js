const grid = document.getElementById('product-grid');

// Agregamos 'categoria' para que el filtro sepa qué mostrar
const misProductos = [
    {
        nombre: "rls1ing-10K Editing Pack", 
        imagen: "o_1jdvl5heu60m11jg1pu4qgo2jec.png",
        linkMega: "https://mega.nz/file/gRlE3YBI#IZTge7rW2QJqZJBmeDdGdHIXPVuxf8QuZ7x7scvcwuo",
        categoria: "presets" 
    },
    {
        nombre: "TRIBRVN'S 10K PACK", 
        imagen: "tribrvntribrvns10kpack.png", 
        linkMega: "https://mega.nz/file/lY90VDhB#oszCBfkg3Vvu6xfDsxmmazuk-mFqWYY6Sy5Ko9xgAt4",
        categoria: "presets"
    },
    {
        nombre: "futile.ae", 
        imagen: "futileaefulleditingaebundle.png", 
        linkMega: "https://mega.nz/file/8dsUkKjB#3tP4iLyOPh9e-Sp7fLvazYuT9BNicv7JbTVpIGYBWJg",
        categoria: "presets"
    },
    {
        nombre: "TRAV1S NEW EDIT PACK", 
        imagen: "trav1seditstrav1sneweditpack.png", 
        linkMega: "https://mega.nz/file/Mc9wiaRb#Qd2BlhCKjpY3eRsnOE9IhnDNoMfbh8yFxGZD9YZ9R3k",
        categoria: "presets"
    },
    {
        nombre: "Ka6gerasae Edit Pack", 
        imagen: "ka6gerasaeeditpack.png", 
        linkMega: "https://mega.nz/file/8AUX3SIL#6WgPCj6jTJDHPR2IT8CaR1IpJ4NN7khjSVeUO8W7rcU",
        categoria: "presets"
    },
    {
        nombre: "BLOHSH_AE'S EDITING PACK", 
        imagen: "blohsh_aeblohsh_aeseditingpack.png", 
        linkMega: "https://mega.nz/file/AJkVDYQK#EtCpONOyUyUUQ3CKR_Rc9onAqJgvUUYV4QgGzPssZLU",
        categoria: "presets"
    },
    {
        nombre: "ICYFRVST EDITING PACK V2", 
        imagen: "icyfrvsticyfrvsteditingpackv2.png", 
        linkMega: "https://mega.nz/file/YAcUhLIR#-BZ7Vv0ApJnqncyzvinfAGS_GZSSwUxlHlW7z7ksBF8",
        categoria: "presets" // Ejemplo de Scene Pack
    },
    {
        nombre: "Strstvrn Official Edit Pack", 
        imagen: "strstvrnofficialeditpack.png", 
        linkMega: "https://mega.nz/file/IIdQDTpS#YPSGo8Ku3KAuAfGyX3I2ILmOc22QEC1i_YAFl-pOwlI",
        categoria: "presets"
    },
    {
        nombre: "SP1DER - EDIT PACK", 
        imagen: "sp1derraepsp1der-editpack.png", 
        linkMega: "https://mega.nz/file/IYtD1YhS#s25-6UiOHFoT5wq5OrxxBQzyVwYgtDRCqy9-n3maNAY",
        categoria: "presets"
    },
    {
        nombre: "SHADOWS COLORING", 
        imagen: "chqosxshadowscoloring.png", 
        linkMega: "https://mega.nz/file/gcc0gK7I#zH793agIV37rhcsFGfE0d2B3824mdt3CHNre7LKKEwc",
        categoria: "presets"
    },
    {
        nombre: "naevisvfx", 
        imagen: "naevisvfxeditingpack.png", 
        linkMega: "https://mega.nz/file/MZlwHJAZ#-eQE0VOp9GuwlWPHmecWHm-BdURZE1rC59fJRkBSmow",
        categoria: "presets" // Otro ejemplo
    },
    {
        nombre: "AMATEUEDITOR'S EDITING PACK", 
        imagen: "amateureditsaepamateueditorseditingpack.png", 
        linkMega: "https://mega.nz/file/ZclWHTxa#l82UGaggqNkziBikpm9FZ78228kZENGbycoIxmJZd78",
        categoria: "presets" // Otro ejemplo
    },
    {
        nombre: "LuMax Scenes", 
        imagen: "photo_5389103098355192489_y.jpg", 
        linkMega: " https://link-hub.net/1357946/wv8a6qIj8zO2",
        categoria: "scene-packs" // Otro ejemplo
    },
    {
        nombre: "Stranger things 5 episodes (vol 2)", 
        imagen: "photo_5389103098355192490_y.jpg",
        linkMega: "https://link-hub.net/1357946/wv8a6qIj8zO2",
        categoria: "scene-packs" // Otro ejemplo
    },
    {
        nombre: "STRANGER THINGS S5 (EPISODES)", 
        imagen: "photo_5389103098355192491_y.jpg", 
        linkMega: "https://link-hub.net/1357946/wv8a6qIj8zO2",
        categoria: "scene-packs" // Otro ejemplo
    },
    {
        nombre: "PERCY JACKSON S2", 
        imagen: "photo_5389103098355192497_y.jpg", 
        linkMega: "https://link-hub.net/1357946/djYIjnKDNipj",
        categoria: "scene-packs" // Otro ejemplo
    }
    
    
];

// Función para renderizar productos (ahora con soporte para filtros)
function mostrarProductos(filtro = 'todos') {
    grid.innerHTML = ''; // Limpiar pantalla
    
    const productosFiltrados = filtro === 'todos' 
        ? misProductos 
        : misProductos.filter(p => p.categoria === filtro);

    productosFiltrados.forEach((prod, index) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 0.1}s`;

        card.innerHTML = `
            <div class="img-box">
                <img src="${prod.imagen}" alt="${prod.nombre}">
            </div>
            <div class="product-info">
                <h3>${prod.nombre}</h3>
                <p>Exclusive content from LKD Group.</p>
                <a href="${prod.linkMega}" target="_blank" class="btn-mega">Download (MEGA/Drive)</a>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Carga inicial
mostrarProductos();
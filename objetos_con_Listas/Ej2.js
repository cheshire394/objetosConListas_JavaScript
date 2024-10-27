class Supermercado {
    constructor(nombre, unidades, precio) {
        this.nombre = nombre;
        this.unidades = unidades;
        this.precio = precio;
    }

    getUnidades() {
        return this.unidades;
    }

    setUnidades(value) {
        this.unidades = value;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(value) {
        this.precio = value;
    }

    // Método para clonar el objeto
    clone() {
        return new Supermercado(this.nombre, this.unidades, this.precio);
    }

    addStock(producto, stock) {
        let clave = stock.size;
        stock.set(clave, producto);
    }

    addCesta(stock, cesta, clave, unidadesCliente) {
        let tipo = Object.prototype.toString.call(cesta); // Determina el tipo de la cesta

        let controlStock = () => {
            let producto = stock.get(clave);

            if (!producto) {
                console.error("Error: Producto no encontrado en el stock.");
                return null;
            }

            let stockUnidades = producto.getUnidades();

            if (stockUnidades < unidadesCliente) {
                console.log("Error, solo hay disponible " + stockUnidades + " del producto " + producto.nombre);
                unidadesCliente = stockUnidades;
            }

            let productoCopia = producto.clone(); // Usar método de clonación

            productoCopia.setUnidades(unidadesCliente);

            // Calcular el precio total para las unidades del cliente
            let precioTotal = productoCopia.getPrecio() * unidadesCliente;
            productoCopia.setPrecio(precioTotal);

            producto.setUnidades(stockUnidades - unidadesCliente);

            return productoCopia;
        }

        const productoCliente = controlStock();

        if (!productoCliente) {
            return;
        }

        switch (tipo) {
            case "[object Array]":
                if (Array.isArray(cesta)) {
                    cesta.push(productoCliente);
                }
                break;
            case "[object Set]":
                cesta.add(productoCliente);
                break;
            case "[object Map]":
                cesta.set(clave, productoCliente);
                break;
            default:
                console.log("Error en la compra, la lista cesta no es correcta");
                break;
        }
    }

    mostrarTicket(cesta) {
        let tipo = Object.prototype.toString.call(cesta);
        let total = 0;

        switch (tipo) {
            case "[object Array]":
                if (Array.isArray(cesta)) {
                    cesta.forEach(producto => {
                        console.log(`Producto: ${producto.nombre}, Unidades: ${producto.getUnidades()}, Precio Total: ${producto.getPrecio()}`);
                        total += producto.getPrecio();
                    });
                }
                break;
            case "[object Set]":
                cesta.forEach(producto => {
                    console.log(`Producto: ${producto.nombre}, Unidades: ${producto.getUnidades()}, Precio Total: ${producto.getPrecio()}`);
                    total += producto.getPrecio();
                });
                break;
            case "[object Map]":
                cesta.forEach((producto, clave) => {
                    console.log(`Ref ${clave}: Producto: ${producto.nombre}, Unidades: ${producto.getUnidades()}, Precio Total: ${producto.getPrecio()}`);
                    total += producto.getPrecio();
                });
                break;
            default:
                console.log("Error en la compra");
                break;
        }

        console.log("Precio total: " + total);
    }
}

// Crear instancia del supermercado y el stock
let supermercado = new Supermercado();
let stock = new Map();

// Crear productos y añadir al stock
let productos = [
    new Supermercado("milk", 2, 5.6),
    new Supermercado("bread", 5, 1.2),
    new Supermercado("eggs", 12, 2.5),
    new Supermercado("cheese", 3, 4.75),
    new Supermercado("butter", 1, 3.4),
    new Supermercado("juice", 4, 2.9)
];

productos.forEach(producto => supermercado.addStock(producto, stock));

// Cestas de clientes
let miArray = [];
let miSet = new Set();
let miMap = new Map();

// Añadir productos a las cestas
supermercado.addCesta(stock, miArray, 0, 2);
supermercado.addCesta(stock, miArray, 1, 1);
supermercado.addCesta(stock, miArray, 2, 2);

supermercado.addCesta(stock, miSet, 3, 1);
supermercado.addCesta(stock, miSet, 4, 1);
supermercado.addCesta(stock, miSet, 5, 1);

supermercado.addCesta(stock, miMap, 5, 1);
supermercado.addCesta(stock, miMap, 1, 1);
supermercado.addCesta(stock, miMap, 3, 1);

// Mostrar tickets
supermercado.mostrarTicket(miArray);
supermercado.mostrarTicket(miSet);
supermercado.mostrarTicket(miMap);

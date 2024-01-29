class Carrito {

    #list

    constructor() {
        this.#list = [];
    }


    añadirProducto(producto, cantidad) {
        const productoExistente = this.#list.find(product => product.sku === producto.sku);

        if (!productoExistente) {
            // Añade el producto si no existe
            this.#list.push({
                sku: producto.sku,
                title: producto.title,
                price: producto.price,
                quantity: parseInt(cantidad),
            });
        } else {
            productoExistente.quantity = parseInt(cantidad);
        }
    }

    borrarProducto(sku) {
        this.#list = this.#list.filter(product => product.sku !== sku);

    }



    obtenerCarrito() {
        return this.#list;
    }

    obtenerPreciototal() {


        let precioTotal = 0;
        this.#list.forEach(product => {
            precioTotal = precioTotal + product.quantity * product.price;

        });


        console.log(precioTotal);
        return Number(precioTotal.toFixed(2));
    }




}

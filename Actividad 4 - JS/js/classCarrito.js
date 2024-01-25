class Carrito {

    #list

    constructor() {
        this.#list = [];
    }

    añadirProducto(product) {
        this.#list.push({
            sku: product.sku,
            title: product.title,
            price: product.price,
        }
        );
    }

    borrarProducto(sku) {
        this.#list = this.#list.filter(product => product.sku !== sku);

    }


    actualizarUnidades(product, cantidad) {
        product.cantidad = product.cantidad + cantidad;
    }

    obtenerInformacionProducto(sku) {
        //Buscador?
    }

    obtenerCarrito() {
        return this.#list;
    }

}


class productoCarrito extends Carrito {
    //Para llamar al constructor primero tienes que llamar al constructor del padre, se hace con la palabra Super.
    constructor(SKU, title, price, cantidad) {
        super(SKU, title, price);
        this.cantidad = 0;
    }

    setCantidad(productoCarrito, cantidad) {

    }
}
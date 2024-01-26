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



    obtenerCarrito() {
        return this.#list;
    }

    obtenerPreciototal() {

        const precioTotal = this.#list.reduce((acc, product) => {
            return acc + product.price;
        }, 0);
        return Number(precioTotal.toFixed(2));

    }

    obtenerCantidad(sku) {

        this.#list.forEach(productoLista => {
            const cantidad = this.#list.filter(productoLista => productoLista.sku == sku);
            console.log(cantidad.length);
            return cantidad.length;
        })

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
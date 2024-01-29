class Product {
    constructor(sku, title, price) {
        this.sku = sku;
        this.title = title;
        this.price = price;
    }

    getProduct(sku) {
        return this.product;
    }

    obtenerInformacionProducto(sku) {
        //Buscador?

        // En el js si tienen parecido los textos, no que sean iguales.
        this.product = this.product.filter(product => product.sku == sku);
    }

}

// Creo otra classe pero con extends porque una cosa son los productos y otra cosa los productos que iran al carrito.
class productCart extends Product {
    #quantity;

    //Para llamar al constructor primero tienes que llamar al constructor del padre, se hace con la palabra Super.
    constructor(sku, title, price, quantity) {
        super(sku, title, price);
        this.quantity = 0;
    }

    setQuantity(cantidad) {
        this.quantity = cantidad;
    }

}



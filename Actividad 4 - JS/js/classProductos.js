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





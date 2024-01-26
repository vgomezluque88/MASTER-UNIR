const carrito = new Carrito();


document.addEventListener("DOMContentLoaded", () => {


    const apiproducts = (product) => {

        // Una forma rapida y limpia crear variables.
        const { SKU, title, price } = product;
        const product_SKU = new Product(SKU, title, price);
        console.table(product_SKU);
        //Coges la etiqueta tbody de la tabla
        const nametable = document.querySelector("table tbody");
        const divTotal = document.querySelector(".cart-products__total");
        const buscador = document.querySelector(".buscadorCart");
        const totalCart = document.querySelector(".totalCart");
        //Creas los elementos que necesitas
        const tr = document.createElement("tr");


        // Creamos La fila que llevara el nombre y el sku
        const titletd = document.createElement("td");

        const title_text = document.createElement("p");
        const sku_text = document.createElement("p");



        const price_text = document.createElement("td");
        const cantidad_text = document.createElement("td");
        const inputCantidadtd = document.createElement("td");
        const inputCantidad = document.createElement("input");
        const buttontd = document.createElement("td");
        const buttonrest = document.createElement("button");
        const buttonsum = document.createElement("button");

        cantidad_text.classList = "cantidadCarrito";
        title_text.textContent = title;
        sku_text.textContent = "sku:" + SKU;

        price_text.textContent = price;
        cantidad_text.textContent = 0;
        buttonrest.innerText = "-";
        buttonsum.innerText = "+";
        inputCantidad.value = 0;
        inputCantidad.type = "number";
        inputCantidad.classList = "inputCart";

        //Añadimos los dos textos al td de Titulo
        titletd.append(title_text);
        titletd.append(sku_text);


        inputCantidadtd.append(buttonrest);
        inputCantidadtd.append(inputCantidad);
        inputCantidadtd.append(buttonsum);


        tr.append(sku_text);
        tr.append(title_text);
        tr.append(inputCantidadtd);
        tr.append(price_text);
        tr.append(cantidad_text);
        tr.append(buttontd);
        nametable.append(tr);


        //Funciones
        //Sirve para lanzar cuando cambia el contenido
        inputCantidad.addEventListener("input", () => {
            carrito.añadirProducto(product_SKU);
            divTotal.innerText = "";
            divTotal.className = "div-classe";

            const divProduct = document.createElement("div");


            carrito.obtenerCarrito().forEach(productoCarrito => {

                const productoCarritotitle = document.createElement("p");
                const productoCarritoprice = document.createElement("p");
                const productoCarritocantidad = document.querySelector(".cantidad");
                productoCarritocantidad.textContent = carrito.obtenerCantidad(productoCarrito.sku);

                const buttonBorrar = document.createElement("button");
                buttonBorrar.textContent = "X";
                buttonBorrar.className = "boton-borrar";

                // El clic del boton de borrar
                buttonBorrar.addEventListener("click", () => {
                    carrito.borrarProducto(productoCarrito.sku);
                    console.log(carrito.obtenerCarrito());
                });

                productoCarritotitle.textContent = productoCarrito.title;
                productoCarritoprice.textContent = parseInt(productoCarrito.price);
                divProduct.append(productoCarritotitle);
                divProduct.append(productoCarritoprice);
                divProduct.append(buttonBorrar);
                divTotal.append(divProduct);

            });

            const precioTotal = document.createElement("p");
            precioTotal.textContent = carrito.obtenerPreciototal();
            totalCart.append(precioTotal);


        });


        // Como crear un buscador
        buscador.addEventListener("input", () => {
            console.log(buscador.value);

            console.log(product_SKU.obtenerInformacionProducto(buscador.value));

        });



        buttonsum.addEventListener("click", () => {

            const input = document.querySelector(".inputCart");
            console.log(input);


            input.value = sumarValue(input.value, "1");

            function sumarValue(valorInput, numeroParaSumar) {
                return valorInput + numeroParaSumar;
            }

        });

        buttonrest.addEventListener("click", () => {
            const input = document.querySelector(".inputCart");
            console.log(input);
            input.value = input.value - 1;


        });
    }

    fetch("https://jsonblob.com/api/jsonBlob/1200560755010560000")
        .then(response => {
            products = response.json();

            products.then(product => {
                product['products'].forEach(element => {
                    apiproducts(element);
                });
            })
        });




});











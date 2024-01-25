const carrito = new Carrito();


document.addEventListener("DOMContentLoaded", () => {


    const apiproducts = (product) => {

        // Una forma rapida y limpia crear variables.
        const { SKU, title, price } = product;
        const product_SKU = new Product(SKU, title, price);
        console.table(product_SKU);
        //Coges la etiqueta tbody de la tabla
        const nametable = document.querySelector("table tbody");
        const divTotal = document.querySelector(".totalCart");

        //Creas los elementos que necesitas.
        const tr = document.createElement("tr");

        const sku_text = document.createElement("td");
        const title_text = document.createElement("td");
        const price_text = document.createElement("td");
        const inputCantidadtd = document.createElement("td");
        const inputCantidad = document.createElement("input");

        const buttontd = document.createElement("td");
        const button = document.createElement("button");

        //Sirve para lanzar cuando cambia el contenido
        inputCantidad.addEventListener("input", () => {
            console.log("cambia el contenido de input");
        });



        button.addEventListener("click", () => {
            carrito.añadirProducto(product_SKU);
            divTotal.innerText = "";
            divTotal.className = "div-classe";

            const divProduct = document.createElement("div");


            carrito.obtenerCarrito().forEach(productoCarrito => {

                const productoCarritotitle = document.createElement("p");
                const productoCarritoprice = document.createElement("p");
                const buttonBorrar = document.createElement("button");
                buttonBorrar.textContent = "X";
                buttonBorrar.className = "boton-borrar";

                buttonBorrar.addEventListener("click", () => {
                    carrito.borrarProducto(productoCarrito.sku);
                    console.log(carrito.obtenerCarrito());
                });

                productoCarritotitle.textContent = productoCarrito.title;
                productoCarritoprice.textContent = productoCarrito.price;
                divProduct.append(productoCarritotitle);
                divProduct.append(productoCarritoprice);
                divProduct.append(buttonBorrar);
                divTotal.append(divProduct);
            });



        });
        sku_text.textContent = SKU;
        title_text.textContent = title;
        price_text.textContent = price;
        button.innerText = "Añadir Carrito";
        inputCantidadtd.append(inputCantidad);

        buttontd.append(button);

        tr.append(sku_text);
        tr.append(title_text);
        tr.append(inputCantidadtd);
        tr.append(price_text);
        tr.append(buttontd);
        nametable.append(tr);
    }

    fetch("https://jsonblob.com/api/jsonBlob/1199428204548186112")
        .then(response => {
            products = response.json();

            products.then(product => {
                product['products'].forEach(element => {
                    apiproducts(element);
                });
            })
        });




});











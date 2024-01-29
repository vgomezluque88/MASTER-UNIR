const carrito = new Carrito();


document.addEventListener("DOMContentLoaded", () => {


    const apiproducts = (product) => {

        // Una forma rapida y limpia crear variables.
        const { SKU, title, price } = product;
        const product_SKU = new productCart(SKU, title, price);

        //Coges la etiqueta tbody de la tabla
        const nametable = document.querySelector("table tbody");
        const divTotal = document.querySelector(".cart-products__total");
        const totalCart = document.querySelector(".totalCartPrice");
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
        inputCantidad.id = "testInput";
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
        buttonrest.classList = "buttonrest";
        buttonsum.classList = "buttonsum";
        inputCantidad.value = 0;
        inputCantidad.type = "text";
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

        buttonsum.addEventListener("click", () => {

            inputCantidad.value = parseInt(inputCantidad.value) + 1; // Incrementa el valor en 1
            //He tenido que crear el campo manualmente porque si no el addEventListener no me saltaba.
            var event = new Event('input', {
                bubbles: true,
                cancelable: true,
            });
            inputCantidad.dispatchEvent(event);
        });



        buttonrest.addEventListener("click", () => {

            if (parseInt(inputCantidad.value) - 1 >= 0) {
                inputCantidad.value = parseInt(inputCantidad.value) - 1; // Resta  el valor en 1

                //He tenido que crear el campo manualmente porque si no el addEventListener no me saltaba.
                var event = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });
                inputCantidad.dispatchEvent(event);
            }
        });

        //Sirve para lanzar cuando cambia el contenido
        inputCantidad.addEventListener("input", () => {


            carrito.añadirProducto(product_SKU, inputCantidad.value);
            console.table(carrito.obtenerCarrito());


            divTotal.innerText = "";
            divTotal.className = "div-classe";



            carrito.obtenerCarrito().forEach(productoCarrito => {
                // LLamar a una funcion de la classe que te devuelva los libros y su cantidad?
                actualizarCarrito(productoCarrito);

            });

            const precioTotal = document.createElement("p");
            precioTotal.textContent = carrito.obtenerPreciototal();
            totalCart.append(precioTotal);
        });

        function actualizarCarrito(productoCarrito) {
            const divProduct = document.createElement("div");
            const classSearch = document.getElementById(productoCarrito.sku);
            console.log(productoCarrito.sku);
            console.log(classSearch);

            if (!classSearch) {

                const productoCarritotitle = document.createElement("p");
                const productoCarritoprice = document.createElement("p");
                const productoCarritocantidad = document.querySelector(".totalCartPrice");
                productoCarritocantidad.textContent = inputCantidad.value;
                product_SKU.quantity = 0;

                const buttonBorrar = document.createElement("button");
                buttonBorrar.textContent = "X";
                buttonBorrar.className = "boton-borrar";

                // El clic del boton de borrar
                buttonBorrar.addEventListener("click", () => {
                    carrito.borrarProducto(productoCarrito.sku);
                });

                productoCarritotitle.textContent = productoCarrito.title;
                productoCarritoprice.textContent = parseInt(productoCarrito.price);
                divProduct.id = productoCarrito.sku;
                divProduct.append(productoCarritotitle);
                divProduct.append(productoCarritoprice);
                divProduct.append(buttonBorrar);
                divTotal.append(divProduct);
                const totalProducto = productoCarrito.price * inputCantidad.value;
                cantidad_text.textContent = Number(totalProducto.toFixed(2));

            }
            if (product_SKU.quantity == 0) {
                divProduct.remove();
                carrito.borrarProducto(productoCarrito.SKU);
            }

        }

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







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
        inputCantidad.id = "input-" + product_SKU.sku;
        const buttontd = document.createElement("td");
        const buttonrest = document.createElement("button");
        const buttonsum = document.createElement("button");

        cantidad_text.classList = "cantidadCarrito";
        cantidad_text.id = "cantidad-" + product_SKU.sku;
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

            if (inputCantidad.value == 0) {
console.log()

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


        });

        function actualizarCarrito(productoCarrito) {
            const divProduct = document.createElement("div");
            const classSearch = document.getElementById(productoCarrito.sku);
            console.log(productoCarrito.sku);
            console.log(classSearch);


            if (classSearch == null) {

                const productoCarritotitle = document.createElement("p");
                const productoCarritoprice = document.createElement("p");
                const productoCarritocantidad = document.querySelector(".totalCartPrice");
                productoCarritocantidad.textContent = carrito.obtenerPreciototal();

                const buttonBorrar = document.createElement("button");
                buttonBorrar.textContent = "X";
                buttonBorrar.className = "boton-borrar";

                // El clic del boton de borrar
                buttonBorrar.addEventListener("click", (event) => {

                    carrito.borrarProducto(productoCarrito.sku);
                    var vaciaInput = document.getElementById("input-" + productoCarrito.sku);
                    vaciaInput.value = 0;
                    var elementoAEliminar = document.getElementById(productoCarrito.sku);
                    // Si no pongo esto se me borra todo el div
                    var elementoPadre = elementoAEliminar.parentNode;
                    elementoPadre.removeChild(elementoAEliminar);
                    productoCarritocantidad.textContent = carrito.obtenerPreciototal();
                    var vaciaTotal = document.getElementById("cantidad-" + productoCarrito.sku);

                    vaciaTotal.textContent = product_SKU.quantity * product_SKU.price;
                });

                productoCarritotitle.textContent = productoCarrito.title;
                productoCarritoprice.textContent = parseInt(productoCarrito.price);
                divProduct.id = productoCarrito.sku;
                divProduct.append(productoCarritotitle);
                divProduct.append(productoCarritoprice);
                divProduct.append(buttonBorrar);
                divTotal.append(divProduct);
                const totalProducto = product_SKU.price * inputCantidad.value;
                cantidad_text.textContent = Number(totalProducto.toFixed(2));

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







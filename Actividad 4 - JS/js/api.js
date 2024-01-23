


document.addEventListener("DOMContentLoaded", () => {
    const apiproducts = (product) => {
        console.table(product);
        product.forEach(element => {
            const nametable = document.createElement("td");
            nametable.innerText = element.sku;
        });
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
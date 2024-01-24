document.addEventListener("DOMContentLoaded", () => {
    const apiproducts = (product) => {

        const { SKU, title, price } = product;
        const nametable = document.querySelector("table tbody");
        const sku_text = document.createElement("td");
        const title_text = document.createElement("td");
        const price_text = document.createElement("td");
        const tr = document.createElement("tr");
        sku_text.textContent = SKU;
        title_text.textContent = title;
        price_text.textContent = price;
        tr.append(sku_text);
        tr.append(title_text);
        tr.append(price_text);
        nametable.append(tr);
    }

    fetch("https://jsonblob.com/api/jsonBlob/1199428204548186112")
        .then(response => {
            products = response.json();

            products.then(product => {
                product['products'].forEach(element => {
                    apiproducts(element);
                    console.table(element);
                });
            })
        });




});
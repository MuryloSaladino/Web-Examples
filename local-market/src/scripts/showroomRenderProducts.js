import data from "../data/loja.json" with { type: 'json' }

const renderProducts = () => {
    const productsDiv = document.querySelector(".products-list")

    data.forEach(product => {
        productsDiv.insertAdjacentHTML("beforeend", `
            <li class="products-list__item">
                <img src="${product.imgUrl}" alt="product-photo">
                <div>
                    <h4>${product.description}</h4>
                    <p>R$ ${product.price.toFixed(2).replace(".", ",")}</p>
                    <span>Quantidade: ${product.amount}</span>
                </div>
                <span class="${product.status ? "available" : "unavailable"}">${product.status ? "Disponível" : "Indisponível"}</span>
            </li>
        `)
    })
}

renderProducts()
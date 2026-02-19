import data from "../../data/loja.json" with { type: 'json' }
import { addToCart } from "../../scripts/cart.js"

const renderProducts = () => {
    const productsDiv = document.querySelector("#productsList")

    data.forEach(product => {
        if(product.status) {
            productsDiv.insertAdjacentHTML("beforeend", `
                <li class="products-list__item">
                    <img src="${product.imgUrl}" alt="product-photo">
                    <div>
                        <h4>${product.description}</h4>
                        <p>R$ ${product.price.toFixed(2).replace(".", ",")}</p>
                        <button id="btnAdd-${product.id}">Add to Cart</button>
                    </div>
                </li>
            `)

            const button = document.querySelector(`#btnAdd-${product.id}`)

            button.addEventListener("click", (e) => {
                addToCart(product.id)
            })
        }
    })
}

renderProducts()
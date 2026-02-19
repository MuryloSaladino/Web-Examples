import data from "../../data/loja.json" with { type: "json" }

const orderBtn = document.querySelector("#cartOrder")

orderBtn.addEventListener("click", () => {
    
    const cart = JSON.parse(localStorage.getItem("@CART"))
    const products = cart.map(cartElement => {
        const match = data.find(dataElement => dataElement.id == cartElement.id)
        return { ...match, qtd: cartElement.qtd }
    })

    let docString = `
        <!DOCTYPE html>
        <html lang="en">
        <head><meta charset="UTF-8"></head>
        <body><ul>
    `

    products.forEach(product => {
        docString += `
            <li>
                <p>Description: ${product.description}</p>
                <p>Unit Price: ${product.price}</p>
                <p>Quantity: ${product.qtd}</p>
                <p>Total: ${product.qtd * product.price}</p>
            </li>
        `
    });
    
    docString += "</ul></body></html>"
    
    
    const blob = new Blob([docString], { type: "application/msword" })

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "carrinho.doc";
    link.click();
})
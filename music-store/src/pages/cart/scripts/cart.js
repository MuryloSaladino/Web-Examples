export const setupCart = () => {
    if(!localStorage.getItem("@CART")) {
        localStorage.setItem("@CART", JSON.stringify([]))
    }
}

export const addToCart = (id) => {

    const cart = JSON.parse(localStorage.getItem("@CART"))
    
    const index = cart.findIndex(element => element.id == id)

    if(index >= 0) {
        cart[index].qtd++
    } else {
        cart.push({ id: id, qtd: 1 })
    }

    localStorage.setItem("@CART", JSON.stringify(cart))
}

export const removeFromCart = (id) => {

    const cart = JSON.parse(localStorage.getItem("@CART"))

    localStorage.setItem("@CART", cart.filter(element => element.id != id))
}
export function addToCart(id) {
    
    let cart = localStorage.getItem("@CART")
    
    if(!cart) {
        const cartCreation = [{ id: id, qtd: 1 }]
        localStorage.setItem("@CART", JSON.stringify(cartCreation))
        return
    }

    cart = JSON.parse(cart)

    for(let i = 0; i < cart.length; i++) {
        if(cart[i].id == id) {
            cart[i].qtd++;
            localStorage.setItem("@CART", JSON.stringify(cart))
            return
        }
    }
    
    cart.push({ id: id, qtd: 1 })
    localStorage.setItem("@CART", JSON.stringify(cart))
}
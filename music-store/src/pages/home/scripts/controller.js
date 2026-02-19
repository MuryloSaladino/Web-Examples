import data from "../../../data/musics.json" with { type: 'json' }
import { renderAlbums } from "./render.js"


const albumsUl = document.getElementById("music-container")

const searchInput = document.getElementById("searchFilter")
const priceInput = document.getElementById("priceFilter")
const genreInputs = document.querySelectorAll(".genre-filter")

const priceLabel = document.getElementById("priceFilterLabel")


const callRender = () => {
    
    const filteredData = data.filter(album => 
        album.name.toLowerCase().includes(searchInput.value.toLowerCase()) &&
        album.price <= Number(priceInput.value) &&
        Array.from(genreInputs).find(input => input.getAttribute("data-genrename") == album.genre).checked
    )
    
    renderAlbums(albumsUl, filteredData)
}


searchInput.addEventListener("input", callRender)
genreInputs.forEach(input => input.addEventListener("input", callRender))
priceInput.addEventListener("input", (e) => {
    callRender()
    priceLabel.innerText = `Max. Value - R$ ${Number(e.target.value).toFixed(2).replace(".",",")}`
})


callRender()
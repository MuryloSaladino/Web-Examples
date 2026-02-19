const inputs = document.querySelectorAll("input")
const button = document.querySelector("button")
const eyeIcon = document.querySelector(".eye")

inputs.forEach(input => {
  input.addEventListener("input", (e) => {

    button.disabled = !(inputs[0].value.length > 2 && inputs[1].value.length > 5)
  })
})


eyeIcon.addEventListener("click", (e) => {
  inputs[1].type = inputs[1].type == "password" ? "text" : "password"
})
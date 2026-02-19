import users from "../../data/users.json" with { type: "json" }

const form = document.querySelector("form")
const usernameInput = document.getElementById("username")
const passwordInput = document.getElementById("password")

form.addEventListener("submit", (e) => {
    e.preventDefault()
  
    submit(usernameInput.value, passwordInput.value)
})

const submit = (username, password) => {
    users.forEach(user => {
        if(user.username == username && user.password == password) {
            localStorage.setItem("@USERID", user.id)

            Toastify({
                text: "Welcome back!",
                duration: 3000
            }).showToast()

            setTimeout(() => {
                window.location.href = "../Loja/index.html"
            }, 3000)
            return
        }

        Toastify({
            text: "Invalid credentials",
            duration: 3000,
        }).showToast()
        
        passwordInput.value = ""
        passwordInput.focus()
    })
}
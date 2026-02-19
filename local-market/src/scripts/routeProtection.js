const user = localStorage.getItem("@USERID")

if(!user) {
    window.location.href = "../../../index.html"
}
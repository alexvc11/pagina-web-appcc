const contraseña = document.getElementById("contraseña");
const form = document.getElementById("form");

form.onsubmit(() => {
    fetch("https://trini-why-quiz.vercel.app/constraseña/comprobar", {
        method: "GET",
        body: contraseña.value
    })
})
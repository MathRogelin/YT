console.log("verificando...")

function verificarJanela () {
    if (window.innerWidth <= 768) {
        console.log("Não é responsivo")
        alert("Este site ainda não é responsivo. Recomendamos acessar pelo computador.");
    } else{
        console.log("Responsivo...")
    }
}

verificarJanela()
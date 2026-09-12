console.log("verificando...")

function verificarJanela () {
    if (window.innerWidth <= 768) {
        console.log("Não é responsivo")
        alert("Este site ainda não é responsivo e está em manutenção. Recomendamos acessar pelo computador para melhor experiência.")
        window.style.display = "none"
    } else{
        console.log("Responsivo...")
    }
}

verificarJanela()
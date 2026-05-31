function buscar() {
    altura = document.getElementById("altura").value
    peso = document.getElementById("peso").value
    pt = peso / altura * altura

    alert ("*********** RESULTADO **********" +
        "\n altura actual: " + altura +
        "\n peso actual: " + peso +
        "\n indice de masa corporal: " + pt
    )
}
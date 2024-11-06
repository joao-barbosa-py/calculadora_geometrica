function menu(){
    let opcao = prompt(`Informe a forma geométrica que você quer calcular:\n1- Triangulo\n2- Retangulo\n3- Quadrado\n4- Trapézio\n5- Circulo\n6- Sair`)
    return opcao
}


function area_triangulo(){
    let base = parseFloat(prompt("Informe a base do seu triangulo:"))
    let altura = parseFloat(prompt("Informe a altura do seu triangulo:"))
    return `A área do seu triangulo é = ${base * altura / 2}`
}
function area_retangulo(){
    let base = parseFloat(prompt("Informe a base do seu retangulo:"))
    let altura = parseFloat(prompt("Informe a altura do seu retangulo:"))
    return `A área do seu triangulo é = ${base * altura}`
}
function area_quadrado(){
    let lado = parseFloat(prompt("Informe um lado do seu quadrado:"))
    return `A área do seu quadrado é = ${lado * lado}`
}
function area_trapezio(){
    let base_maior = parseFloat(prompt("Informe a base maior do seu trapezio:"))
    let base_menor = parseFloat(prompt("Informe a base menor do seu trapezio:"))
    let altura = parseFloat(prompt("Informe a altura do seu trapezio:"))
    return `A área do seu trapézio é = ${(base_maior + base_menor) * altura / 2}`
}
function area_circulo(){
    let raio = parseFloat(prompt(`Informe o raio do seu circulo: `))
    return `A área do seu cisculo é = ${3.14 * raio * raio}`
}

function main(){
    let option = menu()
    do{
        let result 
        switch(option){
            case "1":
                result = area_triangulo()
                break
            case "2":
                result = area_retangulo()
                break
            case "3":
                result = area_quadrado()
                break
            case "4":
                result = area_trapezio()
                break
            case "5":
                result = area_circulo()
                break
            case "6":
                alert(`Encerrando...`)
                break
            default:
                alert(`Escolha uma opção válida!`)
        }
        if(result){
            alert(result)
        }
    }while(option != "6")
}

main()
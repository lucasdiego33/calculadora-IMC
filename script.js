


const calcular =  document.getElementById("calcular")



function imc  (){
    const nome =  document.getElementById("nome").value
    const altura =  document.getElementById("altura").value
    const peso =  document.getElementById("peso").value
    const resultado =  document.getElementById("resultado")



if(nome !== '' && altura !== '' && peso !== '') {
    const valorimc = peso / (altura * altura)

   let classificacao = ""

   if(valorimc < 18){
    classificacao = "Abaixo do peso"

   }else if(valorimc < 25){
    classificacao = "com peso ideal. parabéns"

   }else if(valorimc < 30){
    classificacao = " levemente a cima do peso"

   }else if(valorimc < 35){
    classificacao = "com obesidade grau 1"
   
}else if(valorimc < 40){
    classificacao = "com obesidade grau 2"


}else if (valorimc < 45){
    classificacao = "com obesidade grau 3"

}
   
    resultado.textContent = ` ${nome}, seu IMC é ${valorimc.toFixed(2)} e você está ${classificacao}`
}else {
    resultado.textContent = "preencha os campos"
    }

}




calcular.addEventListener("click", imc)
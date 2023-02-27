function inicio(){
  var preco, litro, caixa = 0, tanque = 0, bomba = 500;

  preco = parseFloat(prompt("Digite o valor a ser abestecido: ")); 
  litro = preco / 5;

  console.log("Preco: " +preco);
  console.log("Litro: " +litro);

  //Frentista
  if(preco > 5){

    tanque = tanque + litro;
    caixa = caixa + preco;
    bomba = bomba - litro;

  }
  else{

    alert("Saldo não disponível! Chame o frentista mais próximo.");
  }

  //preco == 5 reais por litro de gasolina

  console.log("Caixa: " +caixa);
  console.log("Tanque: "  +tanque);
  console.log("Bomba: " +bomba);

}
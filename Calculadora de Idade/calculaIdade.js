const date = new Date();
let d = date.getFullYear();

function calculaIdade(anoDeNacimento, anoAtual){
    if (anoAtual > anoDeNacimento){
        let idade =  anoAtual-anoDeNacimento;
        console.log("Sua idade é:", idade);
        if ( idade > 122 ) {
            console.log("Você é a nova pessoa mais velha do mundo!");
            console.log("Segundo o Guinness, a pessoa mais velha já conhecida foi Jeanne Louise Calment, da França, que viveu até os 122 anos e 164 dias de idade.");
        } 
    } else {
        console.log("Erro, insira um ano valido!");
    } 
    
    }

console.log(calculaIdade(2004,d));

console.log(calculaIdade(1984,2023));
console.log(calculaIdade(2000,2023));
console.log(calculaIdade(2005,1990));

console.log(calculaIdade(1900,2023));

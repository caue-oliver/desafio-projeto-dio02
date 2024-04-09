
let saldoWins = rank(100000000,99999999)
let rankFinal
switch(true){
    case(saldoWins<10): rankFinal="Ferro"
    break
    case(saldoWins<21): rankFinal="Bronze"
    break
     case(saldoWins<51): rankFinal="Prata"
    break 
    case(saldoWins<81): rankFinal="Ouro"
    break 
    case(saldoWins<91): rankFinal="Diamante"
    break
     case(saldoWins<101): rankFinal="Lendário"
    break 
    default: rankFinal="Imortal"
}


function rank(vitorias, derrotas){
  let saldo = vitorias - derrotas
  return saldo
}
console.log(`O herói com o saldo de vitórias de ${saldoWins} está no nível de ${rankFinal}`)
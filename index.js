import chalk from 'chalk'
import readLineSync from 'readline-sync'

const valores = []
let input = ""


//laço while
while (input != "sair")
{
    valores.push(input)
    input = readLineSync
    .question ("Digite as propriedades de CSS: ")
    .toLocaleLowerCase()
}


//mostra o conteúdo do vetor
console.log(chalk.green.bold(valores.sort().join('\n')))

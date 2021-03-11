// Uma função é uma função cujo valor de retorno 
// é determinado apenas por seus valores de entrada
// sem causar efeitos colaterais observáveis
// OBS: efeito colateral observável dis respeito a alterações ou uso em algo fora da função 
// const PI = 3.14

// impura - PI é um valor externo
function areaCircunferencia(raio) {
    return raio * raio * Math.PI // estável
}

console.log(areaCircunferencia(10))

// pura
function areaCircunferenciaPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircunferenciaPura(10, 3.14))
console.log(areaCircunferenciaPura(10, 3.141592))
console.log(areaCircunferenciaPura(10, Math.PI))

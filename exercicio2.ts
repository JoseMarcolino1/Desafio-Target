function verificaFibonacci(num: number): boolean {
    let a: number = 0;
    let b: number = 1;
    let c: number;

    if (num === 0) {
        return true;
    }

    while (true) {
        c = a + b;
        if (c === num) {
            return true;
        } else if (c > num) {
            return false;
        }
        a = b;
        b = c;
    }
}

let num: number = 55;
console.log("Verificando se o número " + num + " está na sequência de Fibonacci:");
if (verificaFibonacci(num)) {
    console.log(num + " está na sequência de Fibonacci.");
} else {
    console.log(num + " não está na sequência de Fibonacci.");
}

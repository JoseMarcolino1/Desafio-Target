function inverterString(str: string): string {
    let resultado: string = '';
    for (let i: number = str.length - 1; i >= 0; i--) {
        resultado += str[i];
    }
    return resultado;
}

const minhaString: string = 'Olá, mundo!';
const stringInvertida: string = inverterString(minhaString);
console.log('String original:', minhaString);
console.log('String invertida:', stringInvertida);

function validateFib(n) {
    let a,c;
    let b = 1;
    while (c < n) {
        c = a + b;
        a = b;
        b = c;
    }
    if (c == n) {
        console.log(`${n} pertence a sequencia de Fibonacci!`);
        return true;
    } else {
        console.log(`${n} não pertence a sequencia de Fibonacci`);
        return false;
    }
}

//lugar de alterar o input para verificar se é fibonacci
validateFib(7);
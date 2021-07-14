function oddNumber(n) {

    if (n % 3 === 0 || n % 5 === 0 || n % 7 === 0) {
        for (let i = 1; i <= 30; i++) {
            const result = i * n;

            console.log(`${n} * ${i} = ${result}`)
        }
    } else {
        console.log(`${n} is not a multiple of 3, 5 or 7`)
    }
}

oddNumber(4);
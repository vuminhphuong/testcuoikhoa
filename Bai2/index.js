function numberOneTriangle(number) {
    for (let i = 1; i <= number; i++) {
        let str = '';
        for (let j = 0; j < i; j++) {
            str += '*';
        }
        document.write(`<div>${str}</div>`);
    }
}

numberOneTriangle(5);
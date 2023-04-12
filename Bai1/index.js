const calc = document.getElementById('calc');
const result = document.getElementById('result');

function checkSNT(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if (number % i === 0) return false;
    }
    return true;
}

calc.addEventListener('click', () => {
    const numbera = Number.parseInt(document.getElementById('numbera').value);
    const numberb = Number.parseInt(document.getElementById('numberb').value);

    if (!Number.isInteger(numbera) || !Number.isInteger(numberb)) {
        result.innerHTML = "Bạn đã nhập sai!";
        return;
    }

    if (numbera > numberb) {
        result.innerHTML = "Số b phải lớn hơn số a";
        return;
    }

    let sum = 0;
    for (let i = numbera; i <= numberb; i++) {
        if (checkSNT(i)) sum += i;
    }

    result.innerHTML = `Tổng các số nguyên tố trong đoạn từ ${numbera} đến ${numberb} là: ${sum}`;
});
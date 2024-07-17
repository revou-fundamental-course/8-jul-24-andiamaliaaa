// function hitungBMI() {
//     const berat = parseFloat(document.getElementById('berat').value);
//     const tinggi = parseFloat(document.getElementById('tinggi').value) / 100;
//     const bmi = berat / (tinggi * tinggi);
//     const nilaiBMI = bmi.toFixed(1);

//     let kategoriBMI = '';
//     if (bmi < 18.5) {
//         kategoriBMI = 'Berat badan kurang';
//     } else if (bmi >= 18.5 && bmi < 24.9) {
//         kategoriBMI = 'Berat badan normal';
//     } else if (bmi >= 25 && bmi < 29.9) {
//         kategoriBMI = 'Berat badan lebih';
//     } else {
//         kategoriBMI = 'Obesitas';
//     }

//     document.getElementById('nilaiBMI').innerText = `BMI Anda: ${nilaiBMI}`;
//     document.getElementById('kategoriBMI').innerText = `Anda memiliki ${kategoriBMI}`;
//     document.getElementById('result').style.display = 'block';
// }

function downloadResult() {
    const nilaiBMI = document.getElementById('nilaiBMI').innerText;
    const kategoriBMI = document.getElementById('kategoriBMI').innerText;
    const resultText = `${nilaiBMI}\n${kategoriBMI}`;

    const blob = new Blob([resultText], { type: 'text/plain' });
    const anchor = document.createElement('a');
    anchor.download = 'BMI_Result.txt';
    anchor.href = window.URL.createObjectURL(blob);
    anchor.click();
}

function updateResult(){
    let berat = document.getElementById('berat').value;
    // if (berat != null && berat != ''){
    //     document.getElementById('result').innerHTML = berat;
    // } else {
    //     alert('Inputan Anda kosong, harap isi kembali dengan angka yang benar ');
    // }
    berat != null && berat != ''
    ? document.getElementById('result').innerHTML = berat
    : alert ('Inputan Anda kosong, harap isi kembali dengan angka yang benar ');
    console.log(parseInt(berat));
}
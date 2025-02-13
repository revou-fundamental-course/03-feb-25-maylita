// ini file Javascript

console.log('Javascript is working!');

function validateForm() {
    let input = document.getElementById('main-input');
    console.log(input.value);

    if (input.value == '') {
        alert('Tolong isi inputan');
    } else {
        /// Proses konversi
        let calc = convertToCelcius(input.value);

        /// Tampilkan hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('cara-konversi').value = `Diket: C=${input.value} F...`;
        console.log('Berhasil di eksekusi');
    }
}

/// Fungsi konversi
let convertToCelcius = (input) => {
    return input * 2;
}
function all() {
    const inputValue = document.getElementById('input').value;
    const hasil = document.getElementById('hasil');

    if (inputValue !== "") {
        const nilai = parseFloat(inputValue);
        const hasilPerkalian = nilai * 10;
        hasil.innerHTML = `Niali Mu: ${hasilPerkalian}`;
    } else {
        hasil.innerHTML = "masukkan angka bodoh!!!";
    }
}
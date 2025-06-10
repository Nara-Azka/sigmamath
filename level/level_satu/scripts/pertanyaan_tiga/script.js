function check(){
    let input = parseInt(document.getElementById("angka").value);
    let hasil = document.getElementById("hasil");
    var all = document.getElementById('class');
    var next = document.getElementById('buttonNext');
    var nextFalse = document.getElementById('buttonNextFalse');
    var konfirmasi = confirm('yakin dengan jawaban mu?');

    if (!konfirmasi) return
    if (input === 25) {
        hasil.innerHTML = '<strong><h1>Benar</strong></h1>';
        hasil.style.color = "green";
        all.style.display = "none";
        next.removeAttribute("hidden");
    } else {
        hasil.innerHTML = "Salah";
        hasil.style.color = "red";
        all.style.display = "none";
        nextFalse.removeAttribute("hidden");
    }
}
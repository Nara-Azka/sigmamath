function cekAngka() {
    let angka = parseInt(document.getElementById("angka").value);
    let hasil = document.getElementById("hasil");
    let button = document.getElementById("secret");
    var hide = document.getElementById("angka")
    var hideTwo = document.getElementById("hide")
    var h2 = document.getElementById("h2")
    var buttonTwo = document.getElementById("secretTwo")

    if (angka === 15) {
        hasil.innerHTML = "<strong>Benar!</strong>";
        hasil.style.color = "green";
        button.removeAttribute("hidden");
        hide.style.display = "none";
        hideTwo.style.display = "none";
        h2.style.display = "none";
        buttonTwo.removeAttribute("hiddem");
    } else {
        hasil.innerHTML = "Salah!";
        hasil.style.color = "red";
    }
}
            

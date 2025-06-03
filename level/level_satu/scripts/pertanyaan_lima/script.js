
function check(){
    let input = parseInt(document.getElementById("angka").value);
    let hasil = document.getElementById("hasil");
    var all = document.getElementById('class');
    var next = document.getElementById('buttonNext');
    let buttonSatu= document.getElementById('satu');
    if (input === 37) {
        hasil.innerHTML = '<strong><h1>Benar</strong></h1>';
        hasil.style.color = "green";
        all.style.display = "none";
        next.removeAttribute("hidden");
    } else {
        hasil.innerHTML = "Salah";
        hasil.style.color = "red";
    }
}

            

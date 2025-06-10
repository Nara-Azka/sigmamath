function cek (){
    let input = parseInt(document.getElementById('input').value);
    let hasil = document.getElementById('hasil');
    let button = document.getElementById('buttonNext');
    let buttonFalse = document.getElementById('buttonNextFalse')
    let evry = document.getElementById('all');
    let note = confirm('Yakin dengan jawaban?');
    //problem solve
    let inputTwo = document.getElementById('input');
    let buttonCheck = document.getElementById('buttonCheck');
    let soal = document.getElementById('soal');

    if (!note) return
    if (input === 35) {
        hasil.innerHTML = "<strong>Benar</strong>";
        hasil.style.color = "green";
        button.removeAttribute('hidden');
        //hidden
        inputTwo.style.visibility = "hidden";
        buttonCheck.style.visibility = "hidden";
        soal.style.visibility = "hidden";
        
    } else {
        hasil.innerHTML = "<strong>Salah</strong>";
        hasil.style.color = "red";
        buttonFalse.removeAttribute('hidden');
        //hidden
        inputTwo.style.visibility = "hidden";
        buttonCheck.style.visibility = "hidden";
        soal.style.visibility = "hidden";
    }
}
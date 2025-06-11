let score = localStorage.getItem("score") ? parseInt(localStorage.getItem("score")) : 0;
let hasil = document.getElementById('hasil');
let nilai = 'nilai mu = ';
let maks = ' dari yang maksimal 100';
let clicked = false;

//true false
function benar() {
    if (!clicked) {
        score += 1
        localStorage.setItem('score', score);
        console.log(score);
        clicked = true;
    }
}
function salah() {
    if (!clicked) {
        score -= 0
        localStorage.setItem('score', score);
        console.log(score);
        clicked = false;
    }
}

//nilai
function input() {
    let nilai = 'nilai mu = ';
    let maks = ' dari yang maksimal 100';
    if (score <= 0) {
        alert('Nilai mu 0 (BIGG LLLLLLLLLLLLLLLLLLLL)');
    }
    if (score === 1) {
        alert(nilai + (score*20)  + maks + ' (BIG LLLLLLLLLLLL)');
    } 
    if (score === 2) {
        alert(nilai + (score*20)  + maks + ' (SKIBIDI)');
    }
    if (score === 3) {
        alert(nilai + (score*20)  + maks + ' (BIASA AJA)');
    }
    if (score === 4) {
        alert(nilai + (score*20)  + maks + ' (SIGMA)');
    }
    if (score === 5) {
        alert(nilai + (score*20)  + maks + ' (SIGMA BOY, JANGAN LUPA MAHKOTAMU KING)');
    }
    console.log(score);
    score = 0;
    location.href = "/level/LevelSelect/script/index_level_select.html";
}
//rest
function restart() {
    score = 0;
    if (score === 0) {
        score = 0
        localStorage.setItem('score', score);
        console.log(score + " berhasil, bukti di kiri");
    } else {
        console.log(score + " gagal");
    }
}
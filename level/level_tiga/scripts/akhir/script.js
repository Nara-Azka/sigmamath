function validasi() {
    console.log("Fungsi Validasi Dipanggil");
    let input = document.getElementById("input").value;
    let hasil = document.getElementById("hasil");
    let hasilTwo = document.getElementById("hasilTwo")
    let hasilTwoFalse = document.getElementById("hasilTwoFalse")

                if (parseInt(input) === 15) {
                    hasil.innerHTML = "Benar";
                    hasil.style.color = "green";
                    hasilTwo.innerHTML = "Hai";
                    hasilTwo.removeAttribute("hidden")
                } 
                else {
                    hasil.innerHTML = "<h1>salah</h1>";
                    hasil.style.color = "red";
                }
            }
            

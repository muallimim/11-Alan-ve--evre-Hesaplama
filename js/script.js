function kare_hesapla(){
    event.preventDefault();
    
    var kare_kenari;
    var kare_alani;
    var kare_cevre;

    kare_kenari = document.getElementById('karenin_kenari').value;

    kare_alani = kare_kenari * kare_kenari;
    kare_cevre = kare_kenari * 4;

    //console.log(kare_alani);

    document.getElementById('result_kare').innerHTML ='<u><span style="font-style: italic;">  Karenin Alanı: <span></u> ' + kare_alani;
    document.getElementById('result_kare').innerHTML +='<br><u><span style="font-style: italic;">  Karenin Çevresi: <span></u> ' + kare_cevre;

}
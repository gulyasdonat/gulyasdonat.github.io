function pontszamitas() {
    var helyezes = 0;
    var ponts = 0;
    var fohadiszallaslevel = document.getElementById('fohadiszallas-e-b').innerHTML;
    var barakklevel = document.getElementById('barakk-e-b').innerHTML;
    var istallolevel = document.getElementById('istallo-e-b').innerHTML;
    var muhelylevel = document.getElementById('muhely-e-b').innerHTML;
    var akademialevel = document.getElementById('akademia-e-b').innerHTML;
    var kovacsmuhelylevel = document.getElementById('kovacsmuhely-e-b').innerHTML;
    var gyulekezohelylevel = document.getElementById('gyulekezohely-e-b').innerHTML;
    var szoborlevel = document.getElementById('szobor-e-b').innerHTML;
    var piaclevel = document.getElementById('piac-e-b').innerHTML;
    var fateleplevel = document.getElementById('fatelep-e-b').innerHTML;
    var agyagbanyalevel = document.getElementById('agyagbanya-e-b').innerHTML;
    var vasbanyalevel = document.getElementById('vasbanya-e-b').innerHTML;
    var tanyalevel = document.getElementById('tanya-e-b').innerHTML;
    var raktarlevel = document.getElementById('raktar-e-b').innerHTML;
    var rejtekhelylevel = document.getElementById('rejtekhely-e-b').innerHTML;
    var fallevel = document.getElementById('fal-e-b').innerHTML;
    
    fetch('resources/epuletponttablazat.txt')
    .then(response => response.text())
    .then(text => console.log(text))
  // outputs the content of the text file






    /*if (fohadiszallaslevel >= 0) {
        ponts = fohadiszallaslevel*100;
    };*/
    document.getElementById('ranglista-pontok').innerHTML=
    "Ranglista(" + helyezes + ".|" + ponts + " P)";
}
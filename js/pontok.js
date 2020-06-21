function pontszamitas() {
    var helyezes = 0;
    var ponts = 0;
    var fohadiszallaslevel =Number(document.getElementById('fohadiszallas-e-b').innerHTML);
    var barakklevel = Number(document.getElementById('barakk-e-b').innerHTML);
    var istallolevel = Number(document.getElementById('istallo-e-b').innerHTML);
    var muhelylevel = Number(document.getElementById('muhely-e-b').innerHTML);
    var akademialevel = Number(document.getElementById('akademia-e-b').innerHTML);
    var kovacsmuhelylevel = Number(document.getElementById('kovacsmuhely-e-b').innerHTML);
    var gyulekezohelylevel = Number(document.getElementById('gyulekezohely-e-b').innerHTML);
    var szoborlevel = Number(document.getElementById('szobor-e-b').innerHTML);
    var piaclevel = Number(document.getElementById('piac-e-b').innerHTML);
    var fateleplevel = Number(document.getElementById('fatelep-e-b').innerHTML);
    var agyagbanyalevel = Number(document.getElementById('agyagbanya-e-b').innerHTML);
    var vasbanyalevel = Number(document.getElementById('vasbanya-e-b').innerHTML);
    var tanyalevel = Number(document.getElementById('tanya-e-b').innerHTML);
    var raktarlevel = Number(document.getElementById('raktar-e-b').innerHTML);
    var rejtekhelylevel = Number(document.getElementById('rejtekhely-e-b').innerHTML);
    var fallevel = Number(document.getElementById('fal-e-b').innerHTML);
    
    /*if (fohadiszallaslevel >= 0) {
        ponts = fohadiszallaslevel*100;
    };*/

    ponts=fohadiszallaslevel+barakklevel+istallolevel;
    document.getElementById('ranglista-pontok').innerHTML=
    "Ranglista(" + helyezes + ".|" + ponts + " P)";
}
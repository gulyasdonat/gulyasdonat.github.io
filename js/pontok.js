function pontszamitas() {
    var helyezes = 1;
    var ponts = 0;
    var fohadiszallaslevel = Number(document.getElementById('fohadiszallas-e-b').innerHTML);
    var barakklevel = Number(document.getElementById('barakk-e-b').innerHTML);
    var istallolevel = Number(document.getElementById('istallo-e-b').innerHTML);
    var muhelylevel = Number(document.getElementById('muhely-e-b').innerHTML);
    var akademialevel = Number(document.getElementById('akademia-e-b').innerHTML);
    var kovacsmuhelylevel = Number(document.getElementById('kovacsmuhely-e-b').innerHTML);
    var szoborlevel = Number(document.getElementById('szobor-e-b').innerHTML);
    var piaclevel = Number(document.getElementById('piac-e-b').innerHTML);
    var fateleplevel = Number(document.getElementById('fatelep-e-b').innerHTML);
    var agyagbanyalevel = Number(document.getElementById('agyagbanya-e-b').innerHTML);
    var vasbanyalevel = Number(document.getElementById('vasbanya-e-b').innerHTML);
    var tanyalevel = Number(document.getElementById('tanya-e-b').innerHTML);
    var raktarlevel = Number(document.getElementById('raktar-e-b').innerHTML);
    var rejtekhelylevel = Number(document.getElementById('rejtekhely-e-b').innerHTML);
    var fallevel = Number(document.getElementById('fal-e-b').innerHTML);


    if (fohadiszallaslevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, fohadiszallaslevel - 1) * 10);   
    }
    if (barakklevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, barakklevel - 1) * 16);
    }
    if (istallolevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, istallolevel - 1) * 20);
    }
    if (muhelylevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, muhelylevel - 1) * 24);
    }
    if (akademialevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, akademialevel - 1) * 512);
    }
    if (kovacsmuhelylevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, kovacsmuhelylevel - 1) * 19);
    }
    if (szoborlevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, szoborlevel - 1) * 24);
    }
    if (piaclevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, piaclevel - 1) * 10);
    }
    if (fateleplevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, fateleplevel - 1) * 6);
    }
    if (agyagbanyalevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, agyagbanyalevel - 1) * 6);
    }
    if (vasbanyalevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, vasbanyalevel - 1) * 6);
    }
    if (tanyalevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, tanyalevel - 1) * 5);
    }
    if (raktarlevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, raktarlevel - 1) * 6);
    }
    if (rejtekhelylevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, rejtekhelylevel - 1) * 5);
    }
    if (fallevel>0) {
        ponts = ponts + Math.round(Math.pow(1.2, fallevel - 1) * 8);
    }   

    document.getElementById('ranglista-pontok').innerHTML =
        "Ranglista(" + helyezes + ".|" + ponts + " P)";
}
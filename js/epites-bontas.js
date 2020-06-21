function fohadiszallasepites() {
    var epit = document.getElementById('fohadiszallas-e-b').innerHTML;
    if (epit==29){
        document.getElementById("fohadiszallas-e-btn").disabled=true;
        epit++;
        document.getElementById('fohadiszallas-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('fohadiszallas-e-b').innerHTML=epit;
        document.getElementById("fohadiszallas-b-btn").disabled=false;
    }  
}
function fohadiszallasbontas() {
    var bont = document.getElementById('fohadiszallas-e-b').innerHTML;
    if (bont==1){
        document.getElementById("fohadiszallas-b-btn").disabled=true;
        bont--;
        document.getElementById('fohadiszallas-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('fohadiszallas-e-b').innerHTML=bont;
        document.getElementById("fohadiszallas-e-btn").disabled=false;
    }
}
function barakkepites() {
    var epit = document.getElementById('barakk-e-b').innerHTML;
    if (epit==24){
        document.getElementById("barakk-e-btn").disabled=true;
        epit++;
        document.getElementById('barakk-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('barakk-e-b').innerHTML=epit;
        document.getElementById("barakk-b-btn").disabled=false;
    } 
}
function barakkbontas() {
    var bont = document.getElementById('barakk-e-b').innerHTML;
    if (bont==1){
        document.getElementById("barakk-b-btn").disabled=true;
        bont--;
        document.getElementById('barakk-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('barakk-e-b').innerHTML=bont;
        document.getElementById("barakk-e-btn").disabled=false;
    }
}
function istalloepites() {
    var epit = document.getElementById('istallo-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,20);
    document.getElementById('istallo-e-b').innerHTML=epit2;
}
function istallobontas() {
    var bont = document.getElementById('istallo-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('istallo-e-b').innerHTML=bont2;
}
function muhelyepites() {
    var epit = document.getElementById('muhely-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,15);
    document.getElementById('muhely-e-b').innerHTML=epit2;
}
function muhelybontas() {
    var bont = document.getElementById('muhely-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('muhely-e-b').innerHTML=bont2;
}
function akademiaepites() {
    var epit = document.getElementById('akademia-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,1);
    document.getElementById('akademia-e-b').innerHTML=epit2;
}
function akademiabontas() {
    var bont = document.getElementById('akademia-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('akademia-e-b').innerHTML=bont2;
}
function kovacsmuhelyepites() {
    var epit = document.getElementById('kovacsmuhely-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,20);
    document.getElementById('kovacsmuhely-e-b').innerHTML=epit2;
}
function kovacsmuhelybontas() {
    var bont = document.getElementById('kovacsmuhely-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('kovacsmuhely-e-b').innerHTML=bont2;
}
function gyulekezohelyepites() {
    var epit = document.getElementById('gyulekezohely-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,1);
    document.getElementById('gyulekezohely-e-b').innerHTML=epit2;
}
function gyulekezohelybontas() {
    var bont = document.getElementById('gyulekezohely-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('gyulekezohely-e-b').innerHTML=bont2;
}
function szoborepites() {
    var epit = document.getElementById('szobor-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,1);
    document.getElementById('szobor-e-b').innerHTML=epit2;
}
function szoborbontas() {
    var bont = document.getElementById('szobor-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('szobor-e-b').innerHTML=bont2;
}
function piacepites() {
    var epit = document.getElementById('piac-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,30);
    document.getElementById('piac-e-b').innerHTML=epit2;
}
function piacbontas() {
    var bont = document.getElementById('piac-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('piac-e-b').innerHTML=bont2;
}
function fatelepepites() {
    var epit = document.getElementById('fatelep-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,30);
    document.getElementById('fatelep-e-b').innerHTML=epit2;
}
function fatelepbontas() {
    var bont = document.getElementById('fatelep-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('fatelep-e-b').innerHTML=bont2;
}
function agyagbanyaepites() {
    var epit = document.getElementById('agyagbanya-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,30);
    document.getElementById('agyagbanya-e-b').innerHTML=epit2;
}
function agyagbanyabontas() {
    var bont = document.getElementById('agyagbanya-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('agyagbanya-e-b').innerHTML=bont2;
}
function vasbanyaepites() {
    var epit = document.getElementById('vasbanya-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,30);
    document.getElementById('vasbanya-e-b').innerHTML=epit2;
}
function vasbanyabontas() {
    var bont = document.getElementById('vasbanya-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('vasbanya-e-b').innerHTML=bont2;
}
function tanyaepites() {
    var epit = document.getElementById('tanya-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,30);
    document.getElementById('tanya-e-b').innerHTML=epit2;
}
function tanyabontas() {
    var bont = document.getElementById('tanya-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('tanya-e-b').innerHTML=bont2;
}
function raktarepites() {
    var epit = document.getElementById('raktar-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,30);
    document.getElementById('raktar-e-b').innerHTML=epit2;
}
function raktarbontas() {
    var bont = document.getElementById('raktar-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('raktar-e-b').innerHTML=bont2;
}
function rejtekhelyepites() {
    var epit = document.getElementById('rejtekhely-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,10);
    document.getElementById('rejtekhely-e-b').innerHTML=epit2;
}
function rejtekhelybontas() {
    var bont = document.getElementById('rejtekhely-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('rejtekhely-e-b').innerHTML=bont2;
}
function falepites() {
    var epit = document.getElementById('fal-e-b').innerHTML;
    epit++;
    epit2=Math.min(epit,20);
    document.getElementById('fal-e-b').innerHTML=epit2;
}
function falbontas() {
    var bont = document.getElementById('fal-e-b').innerHTML;
    bont--;
    bont2=Math.max(bont,0);
    document.getElementById('fal-e-b').innerHTML=bont2;
}

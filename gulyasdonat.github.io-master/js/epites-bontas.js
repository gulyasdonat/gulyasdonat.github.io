function epuletbontasellenorzes() {
    if (document.getElementById('fohadiszallas-e-b').innerHTML==0) {
        document.getElementById("fohadiszallas-b-btn").disabled=true;
    }
    if (document.getElementById('barakk-e-b').innerHTML==0) {
        document.getElementById("barakk-b-btn").disabled=true;
    }
    if (document.getElementById('istallo-e-b').innerHTML==0) {
        document.getElementById("istallo-b-btn").disabled=true;
    }
    if (document.getElementById('muhely-e-b').innerHTML==0) {
        document.getElementById("muhely-b-btn").disabled=true;
    }
    if (document.getElementById('akademia-e-b').innerHTML==0) {
        document.getElementById("akademia-b-btn").disabled=true;
    }
    if (document.getElementById('kovacsmuhely-e-b').innerHTML==0) {
        document.getElementById("kovacsmuhely-b-btn").disabled=true;
    }
    if (document.getElementById('gyulekezohely-e-b').innerHTML==0) {
        document.getElementById("gyulekezohely-b-btn").disabled=true;
    }
    if (document.getElementById('szobor-e-b').innerHTML==0) {
        document.getElementById("szobor-b-btn").disabled=true;
    }
    if (document.getElementById('piac-e-b').innerHTML==0) {
        document.getElementById("piac-b-btn").disabled=true;
    }
    if (document.getElementById('fatelep-e-b').innerHTML==0) {
        document.getElementById("fatelep-b-btn").disabled=true;
    }
    if (document.getElementById('agyagbanya-e-b').innerHTML==0) {
        document.getElementById("agyagbanya-b-btn").disabled=true;
    }
    if (document.getElementById('vasbanya-e-b').innerHTML==0) {
        document.getElementById("vasbanya-b-btn").disabled=true;
    }
    if (document.getElementById('tanya-e-b').innerHTML==0) {
        document.getElementById("tanya-b-btn").disabled=true;
    }
    if (document.getElementById('raktar-e-b').innerHTML==0) {
        document.getElementById("raktar-b-btn").disabled=true;
    }
    if (document.getElementById('rejtekhely-e-b').innerHTML==0) {
        document.getElementById("rejtekhely-b-btn").disabled=true;
    }
    if (document.getElementById('fal-e-b').innerHTML==0) {
        document.getElementById("fal-b-btn").disabled=true;
    }
}
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
    if (epit==19){
        document.getElementById("istallo-e-btn").disabled=true;
        epit++;
        document.getElementById('istallo-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('istallo-e-b').innerHTML=epit;
        document.getElementById("istallo-b-btn").disabled=false;
    }  
}
function istallobontas() {
    var bont = document.getElementById('istallo-e-b').innerHTML;
    if (bont==1){
        document.getElementById("istallo-b-btn").disabled=true;
        bont--;
        document.getElementById('istallo-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('istallo-e-b').innerHTML=bont;
        document.getElementById("istallo-e-btn").disabled=false;
    }
}
function muhelyepites() {
    var epit = document.getElementById('muhely-e-b').innerHTML;
    if (epit==14){
        document.getElementById("muhely-e-btn").disabled=true;
        epit++;
        document.getElementById('muhely-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('muhely-e-b').innerHTML=epit;
        document.getElementById("muhely-b-btn").disabled=false;
    }  
}
function muhelybontas() {
    var bont = document.getElementById('muhely-e-b').innerHTML;
    if (bont==1){
        document.getElementById("muhely-b-btn").disabled=true;
        bont--;
        document.getElementById('muhely-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('muhely-e-b').innerHTML=bont;
        document.getElementById("muhely-e-btn").disabled=false;
    }
}
function akademiaepites() {
    var epit = document.getElementById('akademia-e-b').innerHTML;
    if (epit==0){
        epit++;
        document.getElementById('akademia-e-b').innerHTML=epit;
        document.getElementById("akademia-e-btn").disabled=true;
        document.getElementById("akademia-b-btn").disabled=false;
    }
}
function akademiabontas() {
    var bont = document.getElementById('akademia-e-b').innerHTML;
    if (bont==1){
        bont--;
        document.getElementById('akademia-e-b').innerHTML=bont;
        document.getElementById("akademia-b-btn").disabled=true;
        document.getElementById("akademia-e-btn").disabled=false;
    }
}
function kovacsmuhelyepites() {
    var epit = document.getElementById('kovacsmuhely-e-b').innerHTML;
    if (epit==19){
        document.getElementById("kovacsmuhely-e-btn").disabled=true;
        epit++;
        document.getElementById('kovacsmuhely-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('kovacsmuhely-e-b').innerHTML=epit;
        document.getElementById("kovacsmuhely-b-btn").disabled=false;
    }  
}
function kovacsmuhelybontas() {
    var bont = document.getElementById('kovacsmuhely-e-b').innerHTML;
    if (bont==1){
        document.getElementById("kovacsmuhely-b-btn").disabled=true;
        bont--;
        document.getElementById('kovacsmuhely-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('kovacsmuhely-e-b').innerHTML=bont;
        document.getElementById("kovacsmuhely-e-btn").disabled=false;
    }
}
function gyulekezohelyepites() {
    var epit = document.getElementById('gyulekezohely-e-b').innerHTML;
    if (epit==0){
        epit++;
        document.getElementById('gyulekezohely-e-b').innerHTML=epit;
        document.getElementById("gyulekezohely-e-btn").disabled=true;
        document.getElementById("gyulekezohely-b-btn").disabled=false;
    }
}
function gyulekezohelybontas() {
    var bont = document.getElementById('gyulekezohely-e-b').innerHTML;
    if (bont==1){
        bont--;
        document.getElementById('gyulekezohely-e-b').innerHTML=bont;
        document.getElementById("gyulekezohely-b-btn").disabled=true;
        document.getElementById("gyulekezohely-e-btn").disabled=false; 
    }
}
function szoborepites() {
    var epit = document.getElementById('szobor-e-b').innerHTML;
    if (epit==0){
        epit++;
        document.getElementById('szobor-e-b').innerHTML=epit;
        document.getElementById("szobor-e-btn").disabled=true;
        document.getElementById("szobor-b-btn").disabled=false; 
    }
}
function szoborbontas() {
    var bont = document.getElementById('szobor-e-b').innerHTML;
    if (bont==1){
        bont--;
        document.getElementById('szobor-e-b').innerHTML=bont;
        document.getElementById("szobor-b-btn").disabled=true;
        document.getElementById("szobor-e-btn").disabled=false;
    }
}
function piacepites() {
    var epit = document.getElementById('piac-e-b').innerHTML;
    if (epit==29){
        document.getElementById("piac-e-btn").disabled=true;
        epit++;
        document.getElementById('piac-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('piac-e-b').innerHTML=epit;
        document.getElementById("piac-b-btn").disabled=false;
    }  
}
function piacbontas() {
    var bont = document.getElementById('piac-e-b').innerHTML;
    if (bont==1){
        document.getElementById("piac-b-btn").disabled=true;
        bont--;
        document.getElementById('piac-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('piac-e-b').innerHTML=bont;
        document.getElementById("piac-e-btn").disabled=false;
    }
}
function fatelepepites() {
    var epit = document.getElementById('fatelep-e-b').innerHTML;
    if (epit==29){
        document.getElementById("fatelep-e-btn").disabled=true;
        epit++;
        document.getElementById('fatelep-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('fatelep-e-b').innerHTML=epit;
        document.getElementById("fatelep-b-btn").disabled=false;
    }  
}
function fatelepbontas() {
    var bont = document.getElementById('fatelep-e-b').innerHTML;
    if (bont==1){
        document.getElementById("fatelep-b-btn").disabled=true;
        bont--;
        document.getElementById('fatelep-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('fatelep-e-b').innerHTML=bont;
        document.getElementById("fatelep-e-btn").disabled=false;
    }
}
function agyagbanyaepites() {
    var epit = document.getElementById('agyagbanya-e-b').innerHTML;
    if (epit==29){
        document.getElementById("agyagbanya-e-btn").disabled=true;
        epit++;
        document.getElementById('agyagbanya-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('agyagbanya-e-b').innerHTML=epit;
        document.getElementById("agyagbanya-b-btn").disabled=false;
    }  
}
function agyagbanyabontas() {
    var bont = document.getElementById('agyagbanya-e-b').innerHTML;
    if (bont==1){
        document.getElementById("agyagbanya-b-btn").disabled=true;
        bont--;
        document.getElementById('agyagbanya-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('agyagbanya-e-b').innerHTML=bont;
        document.getElementById("agyagbanya-e-btn").disabled=false;
    }
}
function vasbanyaepites() {
    var epit = document.getElementById('vasbanya-e-b').innerHTML;
    if (epit==29){
        document.getElementById("vasbanya-e-btn").disabled=true;
        epit++;
        document.getElementById('vasbanya-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('vasbanya-e-b').innerHTML=epit;
        document.getElementById("vasbanya-b-btn").disabled=false;
    }  
}
function vasbanyabontas() {
    var bont = document.getElementById('vasbanya-e-b').innerHTML;
    if (bont==1){
        document.getElementById("vasbanya-b-btn").disabled=true;
        bont--;
        document.getElementById('vasbanya-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('vasbanya-e-b').innerHTML=bont;
        document.getElementById("vasbanya-e-btn").disabled=false;
    }
}
function tanyaepites() {
    var epit = document.getElementById('tanya-e-b').innerHTML;
    if (epit==29){
        document.getElementById("tanya-e-btn").disabled=true;
        epit++;
        document.getElementById('tanya-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('tanya-e-b').innerHTML=epit;
        document.getElementById("tanya-b-btn").disabled=false;
    }  
}
function tanyabontas() {
    var bont = document.getElementById('tanya-e-b').innerHTML;
    if (bont==1){
        document.getElementById("tanya-b-btn").disabled=true;
        bont--;
        document.getElementById('tanya-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('tanya-e-b').innerHTML=bont;
        document.getElementById("tanya-e-btn").disabled=false;
    }
}
function raktarepites() {
    var epit = document.getElementById('raktar-e-b').innerHTML;
    if (epit==29){
        document.getElementById("raktar-e-btn").disabled=true;
        epit++;
        document.getElementById('raktar-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('raktar-e-b').innerHTML=epit;
        document.getElementById("raktar-b-btn").disabled=false;
    }  
}
function raktarbontas() {
    var bont = document.getElementById('raktar-e-b').innerHTML;
    if (bont==1){
        document.getElementById("raktar-b-btn").disabled=true;
        bont--;
        document.getElementById('raktar-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('raktar-e-b').innerHTML=bont;
        document.getElementById("raktar-e-btn").disabled=false;
    }
}
function rejtekhelyepites() {
    var epit = document.getElementById('rejtekhely-e-b').innerHTML;
    if (epit==9){
        document.getElementById("rejtekhely-e-btn").disabled=true;
        epit++;
        document.getElementById('rejtekhely-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('rejtekhely-e-b').innerHTML=epit;
        document.getElementById("rejtekhely-b-btn").disabled=false;
    }  
}
function rejtekhelybontas() {
    var bont = document.getElementById('rejtekhely-e-b').innerHTML;
    if (bont==1){
        document.getElementById("rejtekhely-b-btn").disabled=true;
        bont--;
        document.getElementById('rejtekhely-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('rejtekhely-e-b').innerHTML=bont;
        document.getElementById("rejtekhely-e-btn").disabled=false;
    }
}
function falepites() {
    var epit = document.getElementById('fal-e-b').innerHTML;
    if (epit==19){
        document.getElementById("fal-e-btn").disabled=true;
        epit++;
        document.getElementById('fal-e-b').innerHTML=epit;
    }
    else {
        epit++;
        document.getElementById('fal-e-b').innerHTML=epit;
        document.getElementById("fal-b-btn").disabled=false;
    }  
}
function falbontas() {
    var bont = document.getElementById('fal-e-b').innerHTML;
    if (bont==1){
        document.getElementById("fal-b-btn").disabled=true;
        bont--;
        document.getElementById('fal-e-b').innerHTML=bont;
    }
    else {
        bont--;
        document.getElementById('fal-e-b').innerHTML=bont;
        document.getElementById("fal-e-btn").disabled=false;
    }
}

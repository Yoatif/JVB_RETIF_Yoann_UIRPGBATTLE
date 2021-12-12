//variable msg
var message= document.getElementById("msg1");
//varriable bibi
var bibi= document.getElementById("img_Dipsy");
var hpBibi= document.getElementById("hp_hero1");
var mpBibi= document.getElementById("mp_hero1");
var bibiHP = 100;
var bibiMP =100;
var atkBibi = 25;
var atkSpeBibi= 65;
//varriable Inox
var inox= document.getElementById("img_Inox");
var hpInox= document.getElementById("hp_hero2");
var mpInox= document.getElementById("mp_hero2");
var inoxHP = 100;
var inoxMP =100;
var atkInox = 25;
var atkSpeInox= 65;
//variable Di4bolic
var di4bo= document.getElementById("img_Di4bolic");
var hpDi4bo= document.getElementById("hp_hero3");
var mpDi4bo= document.getElementById("mp_hero3");
var di4boHP= 100;
var di4boMP=100;
var atkDi4bo= 25;
var atkSpeDi4bo= 65;
//varriable Kirryu
var kirryu= document.getElementById("img_Kirryu");
var hpKirryu= document.getElementById("hp_hero4");
var mpKirryu= document.getElementById("mp_hero4");
var kirryuHP= 100;
var kirryuMP=100;
var atkKirryu= 25;
var atkSpeKirryu= 65;
//varriable boss
var nicolas= document.getElementById("img_boss");
var hpBossHTML = document.getElementById("hp_boss");
var bossHP = 100;
var resBoss = 15;
var atkboss = 10;
//varriable miniboss
var knutallux= document.getElementById("img_miniboss");
var hpMinibossHTML = document.getElementById("hp_miniboss");
var minibossHP= 100;
var resMiniboss= 15;
var atkMiniboss= 10;
//varriable lutin rouge
var lutin_rouge= document.getElementById("img_rouge");
var hpRouge= document.getElementById("monstre1");
var rougeHP= 100;
var resrouge= 15;
var atkRouge= 10;
//varriable lutin vert 
var lutin_vert= document.getElementById("img_vert");
var hpVert= document.getElementById("hp_monstre2");
var vertHP= 100;
var resVert= 15;
var atkVert= 10;
//button
var attackButton = document.getElementById("buttonAttack");
var specialeButton = document.getElementById("buttonSpecial");
var defenseButton = document.getElementById("buttonprotect");


console.log(attackButton);
attackButton.onclick = function(){
    //perte d'hp
    bossHP = bossHP - 10;
    hpBossHTML.innerHTML = bossHP + " / 100"; 

    //animation
    bibi.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-100px)' }
      ], {
        // timing options
        duration: 200
      });
      //attaque boss
      duration: 200
      bibiHP = bibiHP - 10;
      hpBibi.innerHTML = bibiHP + " / 100"
      //animation boss
      bossHP.animate([
        console.log ("fuck")
        //keyframes
        {transform: 'translateX(0px)'},
        {transform: 'translationX(100px)'}
      ],{
        //timing option
        duration: 200
      })};

console.log(specialeButton);
specialeButton.onclick = function(){
    //perte d'hp
    bossHP = bossHP - 25;
    bibiMP = bibiMP - 15;
    hpBossHTML.innerHTML = bossHP + " / 100"; 

    //animation
    bibi.animate([
        // keyframes
        { transform: 'translateX(0px)' },
        { transform: 'translateX(-100px)' }
      ], {
        // timing options
        duration: 200
      })};
    
console.log(defenseButton);


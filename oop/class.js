class Hero {
  constructor(heroName, heroHp, heroPoints, heroGun) {
    this.name = heroName, 
    this.hp = heroHp, 
    this.points = heroPoints;
    this.gun = heroGun
  }
  showHeroInfo(){
    return `Герой ${this.name} має ${this.pointsname} балів, ${this.hp} здоров'я і ${this.gunname} як зброю`
  }
}

class Ork extends Hero {
    constructor(orkSkin, orkIq, orkSize, heroName, heroHp, heroPoints, heroGun){
        super(heroName, heroHp, heroPoints, heroGun)
        this.skin = orkSkin;
        this.iq = orkIq;
        this.size = orkSize
    }
}

const dataWilly = {
    orkSkin: "green",
    orkIq: 10,
    orkSize: 1.20,
    heroName: "Willy", 
    heroHp: 1200, 
    heroPoints: 500, 
    heroGun: "bullava"
}
const orkWilly = new Ork(dataWilly);

const dataFrank = {
    orkSkin: "purple",
    orkIq: 50,
    orkSize: 2.50,
    heroName: "Frank", 
    heroHp: 8000, 
    heroPoints: 200, 
    heroGun: "hands"
}
const orkFrank = new Ork(dataFrank);

const dataCarl = {
    orkSkin: "grey",
    orkIq: 80,
    orkSize: 0.80,
    heroName: "Carl", 
    heroHp: 1200, 
    heroPoints: 1000, 
    heroGun: "stick"
}
const orkCarl = new Ork(dataCarl);

class Elf extends Hero {
    constructor(elfAge, heroName, heroHp, heroPoints, heroGun){
        super(heroName, heroHp, heroPoints, heroGun)
        this.age = elfAge;
    }
}

const dataMubar = {
    elfAge: 200,
    heroName: "Mubar", 
    heroHp: 4000, 
    heroPoints: 1000, 
    heroGun: "shotgun"
}
const elfMubar = new Elf(dataMubar);

const dataLilly = {
    elfAge: 190,
    heroName: "Lilly", 
    heroHp: 2000, 
    heroPoints: 2000, 
    heroGun: "hands"
}
const elfLilly = new Elf(dataLilly);

const dataMini = {
    elfAge: 40,
    heroName: "Mini", 
    heroHp: 1000, 
    heroPoints: 100, 
    heroGun: "minigun"
}
const elfMini = new Elf(dataMini);

// запускаємо гру
orkWilly.showHeroInfo();
console.log(orkWilly.showHeroInfo())
console.log(orkFrank.showHeroInfo())
console.log(orkCarl.showHeroInfo())

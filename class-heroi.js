class heroi{
    constructor(name, age, type){
      this.name = name;
      this.age = age;
      this.type = type;
    }

    Atacar(){
        let ataque;
      
        switch(this.type){
            
            case "Mago":
            ataque = "Magia"
            console.log(`O ${this.type} atacou usando ${ataque}!\n`)
            break;

            case "Guerreiro":
            ataque = "Espada"
            console.log(`O ${this.type} atacou usando ${ataque}!\n`)
            break;

            case "Monge":
            ataque = "Artes Marciais"
            console.log(`O ${this.type} atacou usando ${ataque}!\n`)
            break;
            
            case "Ninja":
            ataque = "Shuriken"
            console.log(`O ${this.type} atacou usando ${ataque}!\n`)
            break;
        }
    }   
}

const mago = new heroi("Merlin", 121, "Mago")
const guerreiro = new heroi("BadBest", 39, "Guerreiro")
const monge = new heroi("Fufio", 57, "Monge")
const ninja = new heroi("Drugsred", 28, "Ninja")

mago.Atacar()
guerreiro.Atacar()
monge.Atacar()
ninja.Atacar()

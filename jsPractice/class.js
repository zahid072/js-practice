


class products{
    country="bangladesh"
    constructor(name){
        this.name = name;
    }
speak(talk){
    console.log(`talk about ${talk}`)
}
}

const result = new products('mofiz');
console.log(result)
console.log(result.name)

result.speak("book")
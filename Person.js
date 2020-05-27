class P {
    constructor(n,a)
    {
        this.name=n;
        this.age=a;

    }
    greeting()
    {
        console.log(`Hey My name is ${this.name} and i am ${this.age}`)
    }
}
module.exports=P;
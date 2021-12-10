class person {
    constructor(firstName,lastName,age)
    {
        this.firstName=firstName
        this.lastName=lastName
        this.age = age
    }
        sample() 
        {
           //return this.firstName
        console.log(this.firstName+ this.lastName+ " age " +"IS "+ this.age)

        }
}


var el = new person('sakthi','vel',20)
el.sample()


class uber {
    constructor (p_name,t_distance){
        this.p_name=p_name
        this.t_distance=t_distance
    }
    price (){
        return this.p_name+ " taxi charges for travel "+ this.t_distance*18
    }
}
 
var bill = new uber("SAKTHI", 15)
console.log(bill.price())
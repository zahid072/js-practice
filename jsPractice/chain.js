// data access
const info = [{name:"mofiz", address:"amazon forrest"}]
console.log(info[0].name,":", info[0].address);

const products = {
    counter:5000,
    data:[
        {id:1, name:"Dell", price:50000 },
        {id:2, name:"mac book", price:100000 }
    ]
}
console.log(products.counter)
console.log(products.data[0].name)
console.log(products.data[1].name)

const user = {
    id:600,
    name:"montu",
    address:{
        street:{
            first:"47/3 purbo side ",
            second:"right to left then right then left to right"
        }
    }
}
const user2 = {
    id:600,
    name:"jontu",
    address:{
            first:"47/3 purbo side ",
            second:"right to left then right then left to right"
        
    }
}
console.log(user.address.street.second)
// optional chaining
console.log(user2.address.street?.second)
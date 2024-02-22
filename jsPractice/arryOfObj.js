const products = [
    {id:1, name:"hp", price:50000},
    {id:2, name:"mac-book", price:100000},
    {id:3, name:"dell", price:60000},
    {id:4, name:"lenovo", price:40000},
]

const result = products.map(product => product.name);
console.log(result)

const result2 = products.forEach(product => console.log(product.id))
console.log(result2)

const result3 = products.filter(product => product.price > 50000)
console.log(result3)
console.log(result3[0].price)

const result4 = products.find(product => product.price === 60000)
console.log(result4)
console.log(result4.name)

const result5 = products.reduce((acum, product) => acum + product.price ,0)
console.log(result5)


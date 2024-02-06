const mobiles = [
    {phone:"samsung", price:"80000", camera:"20mp", color:"black"},
    {phone:"shaomi", price:"40000", camera:"20mp", color:"black"},
    {phone:"onePlus", price:"30000", camera:"20mp", color:"black"},
    {phone:"iphone", price:"70000", camera:"20mp", color:"black"},
    {phone:"vivo", price:"15000", camera:"20mp", color:"black"}
]

function cheapest(arr){
    let cheap = arr[0].price;
   for(let singleObj of arr){

    if(singleObj.price < cheap){

        cheap = singleObj.price

    }

   }
   return cheap;
}

const cheap = cheapest(mobiles);

console.log("Cheapest phone price:"+cheap)


function highest(arr){
    let high = arr[2].price;
   for(let singleObj of arr){

    if(singleObj.price > high){

        high = singleObj.price

    }

   }
   return high;
}

const high = highest(mobiles);

console.log("Highest phone price:"+high)
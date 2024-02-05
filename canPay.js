
function canPay(arr, num){
     let total = 0;
        if(arr.length ===0){
            return 'array is empty'
        }
     for (let singleNum of arr){
        total += singleNum;
     }

     if(total >= num){
        return true;
     }
     if(total < num){
        return false;
     }
}

let arr = [2, 2, 5];
let arr2= [];

console.log(canPay(arr2, 10))


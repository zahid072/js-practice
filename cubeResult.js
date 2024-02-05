function cubeNumber(num){
    if(typeof num !== "number"){
        return "Please enter a valid number";
    }else{
        let firstResult = num*num;
        let finalResult = firstResult * num;
        return finalResult;
    }
}

const cubeResult = cubeNumber(3);
console.log(cubeResult);

function cubeNumber(number){
    if(typeof number !== "number"){
        return "Please enter a valid number";
    }else{
        let result = Math.pow(number, 3);
        return result;
    }
}

const Result = cubeNumber(6);
console.log(Result);
function validation(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Please provide a number";
  } else {
    let multiply = num1 * num2;
    return multiply;
  }
}

console.log(validation(5, "nine"));
console.log(validation(5, 9));
console.log("___________________________________________")
function fullName(str1, str2) {
  if (typeof str1 !== "string" || typeof str2 !== 'string') {
    return "Please provide a string";
  } else {
    const fullName = str1 + " " + str2;
    return fullName;
  }
}

console.log(fullName("Zahid", "Hasan"));
console.log(fullName(20, "Hasan"));
console.log("___________________________________________")


function getPrice(obj){
    if (Array.isArray(obj)){
        return "Please provide an object"
    }else{
        const price = obj.price;
        return price

    }
}

console.log(getPrice({name:"apple", price:22}));
console.log(getPrice(["apple", 22]));
const numbers = [5, 13, 54, 18, 24]

const double = numbers.map(num => num * 2);
const plusFive = numbers.map(num => num + 5);
const half = numbers.map(num => num / 2);

console.log(double)
console.log(plusFive)
console.log(half)

const friends = [ 'jontuuu', 'montu', 'soontu', 'ontu']


const length = friends.map(friend => friend.length);
const friendFirstLetter = friends.map(friend => friend[0]);

console.log(length)
console.log(friendFirstLetter)
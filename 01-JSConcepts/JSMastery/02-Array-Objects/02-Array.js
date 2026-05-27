const Num = [1,3,5,6,]
const nameHero = ["ram","sham","vir"];

const nameNum = [...nameHero,...Num]
console.log(nameNum.toString());   //ram,sham,vir,1,3,5,6

const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,4]]]
console.log(anotherArr);  //[ 1, 2, 3, [ 4, 5, 6 ], 7, [ 6, 7, [ 4, 4 ] ] ]

console.log(anotherArr.flat(Infinity)); //[1, 2, 3, 4, 5,6, 7, 6, 7, 4,4]
  
  
console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));



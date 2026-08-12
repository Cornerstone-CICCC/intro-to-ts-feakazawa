function doubleNumber(num: number): number {
  return num * 2;
}

function squareNumber(num: number): number {
  return num * num;
}

function isEven(num: number): boolean {
  return num % 2 === 0;
}

function isAdult(age: number): boolean {
  return age >= 18;
}

function reverseString(word: string): string {
  const reverse = word.split("").reverse().join("");
  return reverse;
}

function capitalizeString(word: string): string {
  const capitalized = word[0].toUpperCase() + word.slice(1);
  return capitalized;
}

console.log("Double of 6:", doubleNumber(6));
console.log("Square of 9:", squareNumber(9));
console.log("12 is even:", isEven(12));
console.log("11 is even:", isEven(11));
console.log("24 is adult:", isAdult(24));
console.log("15 is adult:", isAdult(15));
console.log("fernanda reversed:", reverseString("fernanda"));
console.log("cornerstone capitalized:", capitalizeString("cornerstone"));

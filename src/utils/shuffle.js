// const shuffleArr = (arr) => {
//   let m = arr.length; let t; let i;
//   // While there remain elements to shuffle…
//   while (m) {
//     // Pick a remaining element…
//     i = Math.floor(Math.random() * (m--));
//     // And swap it with the current element.
//     t = arr[m];
//     arr[m] = arr[i];
//     arr[i] = t;
//   }
//   return arr;
// };

function shuffleArr(array) {
  const newArray = [];
  let number = Math.floor(Math.random() * array.length);
  let count = 1;
  newArray.push(array[number]);

  while (count < array.length) {
    const newNumber = Math.floor(Math.random() * array.length);
    if (!newArray.includes(array[newNumber])) {
      count += 1;
      number = newNumber;
      newArray.push(array[number]);
    }
  }

  return newArray;
}
export default shuffleArr;

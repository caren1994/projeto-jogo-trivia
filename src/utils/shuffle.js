const shuffleArr = (arr) => {
  const m = arr.length; let t; let i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m - 1);
    // And swap it with the current element.
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
};

export default shuffleArr;

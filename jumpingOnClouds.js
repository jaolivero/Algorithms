function jumpingOnClouds(c) {
  let minNumOfJumps = 0;
  let skipIndexes = [];
  c.forEach((cloud, index) => {
    cloud === 0 &&
      c[index + 1] === 0 &&
      c[index + 2] === 0 &&
      (minNumOfJumps -= 1) &&
      skipIndexes.push(index + 1);
    skipIndexes.indexOf(index) === -1 && cloud === 0 && ++minNumOfJumps;
  });
  return minNumOfJumps;
}

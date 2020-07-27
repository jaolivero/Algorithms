function breakingRecords(scores) {
  var best = 0;
  var worst = 0;
  var highScore = (lowScore = scores[0]);
  for (var i = 0; i < scores.length; i++) {
    if (scores[i] > highScore) {
      highScore = scores[i];
      best++;
    } else if (scores[i] < lowScore) {
      lowScore = scores[i];
      worst++;
    }
  }
  return [best, worst];
}
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));

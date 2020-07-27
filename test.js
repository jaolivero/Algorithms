function migratoryBirds(arr) {
  var mostCommon = 0;
  var count = 0;
  // var type = 0;
  arr.sort();
  for (var i = 0; i < arr.length; i++) {
    var max = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1;
    if (max > count) {
      count = max;
      mostCommon = arr[i];
    }
    i = arr.lastIndexOf(arr[i]);
  }
  return mostCommon;
}

console.log(migratoryBirds([1, 1, 2, 3, 3, 3, 3, 4, 2, 2, 2, 2, 4, 4, 4]));

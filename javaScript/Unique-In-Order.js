// https://www.codewars.com/kata/54e6533c92449cc251001667

function uniqueInOrder(iterable){
  var results = [];
  if (iterable.length >= 1) {
    results.push(iterable[0])
  }
  for (var x = 1; x < iterable.length; x++) {
    if (iterable[x] !== results[results.length - 1]) {
      results.push(iterable[x]);
    }
  }
  return results;
}
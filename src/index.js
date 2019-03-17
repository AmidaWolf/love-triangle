/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var count = 0; //счётчик треугольников
  var checked = []; //массив проверенных значений

  for (var i = 1; i <= preferences.length; i++) {
    var first = preferences[i - 1];
    var second = preferences[first - 1];
    var third = preferences[second - 1];

    if (first !== second && second !== third && third === i&& !checked.some(e => e === first || e === second || e === third)) {
      checked.push(first, second, third);
      count++;
    } //нахождение участников треугольника и проверка на повторение участников треугольника - внести значения 1го, 2го и 3го в массив и увеличить счётчик.
}
  return count;
};
// your implementation

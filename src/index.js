module.exports = function getZerosCount(number, base) {
    var x = Number.MAX_VALUE;
  var y = base;
  for (var i = 2; i <= base; i++) {
    if (y % i === 0) {
      var p = 0;
      while (y % i === 0) {
         y = y / i;     
         p++;
      }
      var a = 0;
      var b = Math.floor(number / i);
      while (b > 0) {
        a += b;
        b = Math.floor(b / i);
      }
      x = Math.min(x, Math.floor(a / p))
    }
  }
  return x;
}
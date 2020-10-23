module.exports = function reverse (n) {
  arr = Array.from(Math.abs(n).toString()).reverse().join("");
  return arr;
}

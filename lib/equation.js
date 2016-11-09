var eqs = require('eqsolver');



function run (arr) {

  l = [[1, 2, 3], [2, -1, 1], [3, 0, -1]];
  r = [9, 8, 3];

  return eqs(l,r);
}

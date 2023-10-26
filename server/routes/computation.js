var express = require('express');
var router = express.Router();

/* GET computation page. */
router.get('/', function (req, res, next) {
  // Generate random values for x and y
  var x = Math.random().toFixed(2);
  var y = Math.random().toFixed(2);

  let Pow = Math.pow(x, y).toFixed(2); 
  let Sign = Math.sign(x).toFixed(2);
  let Tanh = Math.tanh(x).toFixed(2);
  let Trunc = Math.trunc(x).toFixed(2);

  res.render('computation', {
    title: 'Computation',
    x1: `applied to ${x} and ${y} is ${Pow}`,
    x2: ` applied to ${x} is ${Sign}`,
    x3: ` applied to ${x} is ${Tanh}`,
    x4: ` applied to ${x} is ${Trunc}`,
  });
});

module.exports = router;

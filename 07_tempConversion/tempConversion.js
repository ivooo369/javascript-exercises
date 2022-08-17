const ftoc = function (fah) {
  fah = (fah - 32) * (5 / 9);
  fahRounded = Math.round(fah * 10) / 10;
  return fahRounded;
};

const ctof = function (cels) {
  cels = cels * (9 / 5) + 32;
  celsRounded = Math.round(cels * 10) / 10;
  return celsRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};

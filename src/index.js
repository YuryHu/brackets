module.exports = function check(str, bracketsConfig) {
  bracketsConfig =  bracketsConfig.map(e => e.join(''));
  let contains = true;
  while (contains) {
    bracketsConfig.forEach(e => {
      str = str.replaceAll(e, '');
    });
    contains = false;
    bracketsConfig.forEach(e => {
      if (str.includes(e)) {
        contains  =  true;
      }
    });
  }
  return !str.length;
}

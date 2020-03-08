const biggify = function(num) {
  return num + 9000;
}

const nasafy = function(num) {
  out = [];
  while(num > 0) {
    out.push(num--);
  }
  out.push("Blast off!");

  return out;
}

const reversify = function(str) {
  let out = '';
  for(let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}

const titleify = function(str) {
  let wasSpace = 1;
  let out = '';

  for(char of str) {
    if(char == ' ') {
      wasSpace = 1;
    } else {
      if(wasSpace) {
        char = char.toUpperCase();
        wasSpace = 0;
      } else {
        char = char.toLowerCase();
      }
    }
    out += char;
  }
  return out;
}

const crazify = function(str) {
  let upper = false;
  let out = '';

  for(char of str) {
    if(upper) {
      out += char.toUpperCase();
    } else {
      out += char.toLowerCase();
    }
    upper = (char == ' ') ? upper : !upper;
  }
  return out;
}

if (typeof biggify === 'undefined') {
  biggify = undefined;
}

if (typeof nasafy === 'undefined') {
  nasafy = undefined;
}

if (typeof reversify === 'undefined') {
  reversify = undefined;
}

if (typeof titleify === 'undefined') {
  titleify = undefined;
}

if (typeof crazify === 'undefined') {
  crazify = undefined;
}


module.exports = {
  biggify,
  nasafy,
  reversify,
  titleify,
  crazify,
}

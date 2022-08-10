export const colors = {
  black: '#000000',
  grey: '#DFDFDF',
  white: '#FFFFFF',
  red: '#FB1B1B',
  darkRed: '#CE2211',

  //POKEMON COLORS
  normal: '#a8a77a',
  fire: '#ee8130',
  water: '#6390f0',
  electric: '#f7d02c',
  grass: '#7ac74c',
  ice: '#96d9d6',
  fighting: '#c22e28',
  poison: '#a33ea1',
  ground: '#a2bf65',
  flying: '#a98ff3',
  psychic: '#f95587',
  bug: '#a6b91a',
  rock: '#b6a136',
  ghost: '#735797',
  dragon: '#6f35fc',
  dark: '#705746',
  steel: '#b7b7ce',
  fairy: '#d685ad',
  'unknown???': '#000000',
};

// IF COLOR TOO DARK RETURN WHITE
// ELSE RETURN BLACK
export const getTextColor = color => {
  const code = color.substring(1);
  var r = parseInt(code.substring(0, 2), 16);
  var g = parseInt(code.substring(2, 4), 16);
  var b = parseInt(code.substring(4, 6), 16);
  var uicolors = [r / 255, g / 255, b / 255];
  var c = uicolors.map(col => {
    if (col <= 0.03928) {
      return col / 12.92;
    }
    return Math.pow((col + 0.055) / 1.055, 2.4);
  });
  var L = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  return L > 0.179 ? '#000000' : '#FFFFFF';
};

// SHADE COLOR BY PERCENT
// PERCENT: 0.9 (10% darker) / 1.1 (10% lighter)
export const darkenColor = (color, percent) => {
  const code = color.substring(1);
  var r = parseInt(code.substring(0, 2), 16);
  var g = parseInt(code.substring(2, 4), 16);
  var b = parseInt(code.substring(4, 6), 16);

  r = parseInt(r * percent, 10);
  g = parseInt(g * percent, 10);
  b = parseInt(b * percent, 10);

  r = r < 255 ? r : 255;
  g = g < 255 ? g : 255;
  b = b < 255 ? b : 255;

  return `#${
    r.toString(16).length === 1 ? '0' + r.toString(16) : r.toString(16)
  }${g.toString(16).length === 1 ? '0' + g.toString(16) : g.toString(16)}${
    b.toString(16).length === 0 ? '0' + b.toString(16) : b.toString(16)
  }`;
};

export default colors;

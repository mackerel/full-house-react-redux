'use strict';
const capitalize = str => { return str.charAt(0).toUpperCase() + str.slice(1); }

export function titleize(baseStr) {
    var string_array = baseStr.split(' ');
    string_array = string_array.map(function(str) {
      return capitalize(str);
    });
    return string_array.join(' ').replace(/_/, ' ');
}
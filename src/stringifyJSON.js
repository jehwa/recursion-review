// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

let stringifyJSON = function(obj) {
  // your code goes here
//
//{name: 'Ian', 
// cohort: 95,
// pets: ['layla', 95, false],
// food: {color: 'yellow', style: 'round'},
// kids: false}
  if (obj === null) {
    return 'null';
  }
  if (typeof obj === 'function') {
    return null;
  }
  if (typeof obj === 'undefined') {
    return null;
  }
  if (typeof obj === 'number') {
    return `${obj}`;
  }
  if (typeof obj === 'string') {
    return `"${obj}"`;
  }
  if (Array.isArray(obj)) {
    let arr = obj.map(function(ele) {
      return stringifyJSON(ele);
    });
    return `[${arr}]`;
  }
  if (typeof obj === 'boolean') {
    return `${obj}`;
  }

  if (typeof obj === 'object' && !Array.isArray(obj)) {
    let output = [];
    for (let key in obj) {
      let value = stringifyJSON(obj[key]);
      if (obj[key] !== undefined && typeof(obj[key]) !== 'function') {
        output.push(`"${key}":${value}`);
      }
    }
    return `{${output.join(',')}}`;
  } 

};











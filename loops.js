function breakOut(array, changeVal, stopVal) {
  for (var i = 0, l = array.length; i < l; i ++) {
    if (array[i] === stopVal) {
      break;
    }
    array[i] = changeVal;


  }
  return array
}

function keepGoing(array, changeVal, skipVal) {
  for (var i = 0, l = array.length; i < l; i ++) {
    if (array[i] === skipVal) {
      continue;
    }
    array[i] = changeVal;
  }
  return array;
}

function findBy(array, findFn) {
  for (var i = 0, l = array.length; i < l; i ++) {
    if (findFn(array[i])) {
      return array[i];
    }

  }
  return null;
}

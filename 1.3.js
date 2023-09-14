function flatten(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flatten(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

const nested = [4, [[5], [6, [7], 8], 9, 10]];
const flattened = flatten(nested);
console.log(flattened);

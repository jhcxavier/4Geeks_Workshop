var letterCasePermutation = function (s) {
  let result = [];
  helper(s, 0, "", result);
  return result;
};
function helper(str, index, partial, result) {
  if (index === str.length) {
    return result.push(partial);
  }
  if (!isNaN(str[index])) {
    helper(str, index + 1, partial + str[index], result);
  } else {
    //         toLowerCase()
    helper(str, index + 1, partial + str[index].toLowerCase(), result);
    //         toUpperCase()
    helper(str, index + 1, partial + str[index].toUpperCase(), result);
  }
}

function capitalize(str) {
  let result = str;
  if ((str.charCodeAt(0) >= 'a'.charCodeAt(0)) && (str.charCodeAt(0) <= 'z'.charCodeAt(0))) {
    result = String.fromCharCode((str.charCodeAt(0) - 'a'.charCodeAt(0)) + 'A'.charCodeAt(0)) + str.slice(1);
  }

  return result;
}

export { capitalize };

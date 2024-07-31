/* eslint-disable */
export default function cleanSet(set, startString) {
  let result = '';
  for (const item of set) {
    if (item.startsWith(startString)) {
      result += `${item.replace(startString, '')}-`;
    }
  }
  if (result) {
    result = result.slice(0, -1);
  } if (!startString) {
    result = '';
  }
  return result;
}

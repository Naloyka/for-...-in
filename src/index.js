export default function orderSort(obj, arr) {
  const sortOrder = [];
  const sortAlphabet = [];

  for (const key in obj) {
    if (arr.includes(key)) {
      sortOrder.push({ key, value: obj[key] });
    } else {
      sortAlphabet.push({ key, value: obj[key] });
    }
  }

  sortAlphabet.sort((a, b) => (a.key > b.key ? 1 : -1));

  return [...sortOrder, ...sortAlphabet];
}

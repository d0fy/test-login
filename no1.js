const arr = [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"];
const dataSort = (arr = []) => {
  const sorter = (a, b) => {
    if (typeof a === "string" && typeof b === "number") {
      return -1;
    }
    if (typeof a === "number" && typeof b === "string") {
      return 1;
    }
    if (typeof a === "string" && typeof b === "string") {
      return a.charCodeAt(0) - b.charCodeAt(0);
    }
    return a - b;
  };
  const res = arr.sort(sorter);
  return res;
};
console.log(dataSort(arr));

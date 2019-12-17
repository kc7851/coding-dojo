const solution = (d, budget) =>
  getNumberOfDepartment(sortByAscending(d), budget);

const sortByAscending = array => [...array].sort((a, b) => a - b);

const getNumberOfDepartment = (sortedArray, budget) =>
  sortedArray.reduce(
    ({ b, size }, i) => (b < i ? { b, size } : { b: b - i, size: size + 1 }),
    { b: budget, size: 0 }
  ).size;

test("solution", () => {
  expect(solution([1, 3, 2, 5, 4], 9)).toBe(3);
  expect(solution([2, 2, 3, 3], 9)).toBe(3);
  expect(solution([2, 2, 3, 3], 10)).toBe(4);
});

test("sortByAscending", () => {
  expect(sortByAscending([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  expect(sortByAscending([14, 3, 0, 5, -4])).toEqual([-4, 0, 3, 5, 14]);
});

test("getNumberOfDepartment", () => {
  expect(getNumberOfDepartment([1, 2, 3, 4, 5], 9)).toBe(3);
  expect(getNumberOfDepartment([1, 2, 3, 4, 5], 10)).toBe(4);
  expect(getNumberOfDepartment(sortByAscending([2, 2, 3, 3]), 10)).toBe(4);
});

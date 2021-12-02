import groupThePeople from './main';

const testCases: Array<[number[], number[][]]> = [
  [
    [3, 3, 3, 3, 3, 1, 3],
    [[5], [0, 1, 2], [3, 4, 6]],
  ],
  [
    [2, 1, 3, 3, 3, 2],
    [[1], [0, 5], [2, 3, 4]],
  ],
];

describe('group-the-people-given-the-group-size-they-belong-to', () => {
  test.each(testCases)(
    'groupThePeople when groupSizes is %s',
    (groupSizes, expected) => {
      const result = groupThePeople(groupSizes);

      for (const nums of expected) {
        expect(result).toContainEqual(nums);
      }
    },
  );
});

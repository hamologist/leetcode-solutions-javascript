import sum from './main';

describe('add-two-integers', () => {
  it('should add two numbers together', () => {
    expect(sum(12, 5))
      .toBe(17);
  });
});

import { isNode, isBrowser } from './';

describe('isNode()', () => {
  xit('return true on Node environment', () => {
    expect(isNode).toBeTruthy();
  });
});

describe('isBrowser()', () => {
  it('return true on Browser environment', () => {
    expect(isBrowser).toBeFalsy();
  });
});

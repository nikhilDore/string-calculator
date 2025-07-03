const {add} = require('./stringCalculator');

describe('calculator', () => {
    test('returns sum for 2 numbeers', () => {
        expect(add('1,2')).toBe(3);
    })
});
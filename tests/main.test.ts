import { PRIMO } from '../src/main';

describe('test', () => {
    it('should merge three sorted arrays correctly', () => {
        const num1 = [1, 3, 5, 7];
        const num2 = [2, 4, 6, 8];

        const expected = [1, 2, 3, 4, 5, 6, 7, 8];
        const result = PRIMO(num1, num2, );

        expect(result).toEqual(expected);
    });
});

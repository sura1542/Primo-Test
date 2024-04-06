import { PRIMO } from '../src/main';

describe('test', () => {
    it('should merge three sorted arrays correctly', () => {
        const collection1 = [1, 3, 5, 7];
        const collection2 = [8, 6, 4, 2];
        const collection3 = [0, 2, 4, 6, 8];

        const expected = [0, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8];
        const result = PRIMO(collection1, collection2, collection3);

        expect(result).toEqual(expected);
    });
});

import { describe, it } from '@jest/globals';
import { fromBinary, toBinary } from './base64-utils';

describe('fn: toBinary', () => {
    it('base64 encodes the input', async () => {
        const input = 'Hello, World!';
        const expectedOutput = 'SGVsbG8sIFdvcmxkIQ==';

        const result = toBinary(input);

        expect(result).toEqual(expectedOutput);
    });

    it('handles 16bit Unicode code points', async () => {
        const input = '👋, 🌍!';
        const expectedOutput = '8J+Riywg8J+MjSE=';

        const result = toBinary(input);

        expect(result).toEqual(expectedOutput);
    });
});

describe('fn: fromBinary', () => {
    it('decodes the base64 input', async () => {
        const input = 'SGVsbG8sIFdvcmxkIQ==';
        const expectedOutput = 'Hello, World!';

        const result = fromBinary(input);

        expect(result).toEqual(expectedOutput);
    });

    it('handles 16bit Unicode code points', async () => {
        const input = '8J+Riywg8J+MjSE=';
        const expectedOutput = '👋, 🌍!';

        const result = fromBinary(input);

        expect(result).toEqual(expectedOutput);
    });
});

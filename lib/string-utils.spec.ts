import { describe, it } from '@jest/globals';
import {sanitizeEmail, sanitizeName} from './string-utils';

describe('fn: sanitizeEmail', () => {
    it('base64 encodes the input', async () => {
        const input = 'hello@example.com';
        const expectedOutput = 'aGVsbG9AZXhhbXBsZS5jb20=';

        const result = sanitizeEmail(input);

        expect(result).toEqual(expectedOutput);
    });

    it('prefixes the encoded string', async () => {
        const input = 'hello@example.com';
        const prefix = 'email';
        const expectedOutput = 'email:aGVsbG9AZXhhbXBsZS5jb20=';

        const result = sanitizeEmail(input, { prefix });

        expect(result).toEqual(expectedOutput);
    });
});

describe('fn: sanitizeName', () => {
    it('replaces all but the initials with an asterisk', async () => {
        const input = 'Darth Tony Hawk Vader, Phd.';
        const expectedOutput = 'D**** T*** H*** V***** P***';

        const result = sanitizeName(input);

        expect(result).toEqual(expectedOutput);
    });
});

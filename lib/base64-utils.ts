// Convert a Unicode string to a string in which each 16-bit unit occupies only one byte
// N.B.: This fn copied from MDN.
// See: https://developer.mozilla.org/en-US/docs/Glossary/Base64#solution_1_%E2%80%93_escaping_the_string_before_encoding_it
export const toBinary = (str: string): string =>  {
    return Buffer.from(str).toString('base64');
};

export const fromBinary = (str: string): string => {
    return Buffer.from(str, 'base64').toString('utf-8');
};

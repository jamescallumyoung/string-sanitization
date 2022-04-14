import { toBinary } from './base64-utils';

interface SanitizationOptions {
    prefix?: string;
}

export const sanitizeEmail = (email: string, { prefix }: SanitizationOptions = {}): string => {
    return (prefix) ? `${prefix}:${toBinary(email)}` : toBinary(email);
};

export const sanitizeName = (name: string): string => {
    const words = name.split(' ');

    return words.map(word => word
        .replace(/./g, '*')
        .replace(/^./, word.charAt(0))
    ).join(' ');
};

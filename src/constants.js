/**
 * @type { Map<Mode, number> }
 */
export const MODE_INDICATORS = new Map([
    ["numeric", 0b0001],
    ["alpha", 0b0010],
    ["byte", 0b0100],
    ["kanji", 0b1000]
]);

/**
 * @type { VersionProp[] }
 */
export const VERSION = [
    {
        version: 1,
        L: {
            numeric: 41,
            alphanumeric: 25,
            byte: 17,
            kanji: 10
        },
        M: {
            numeric: 34,
            alphanumeric: 20,
            byte: 14,
            kanji: 8
        },
        Q: {
            numeric: 27,
            alphanumeric: 16,
            byte: 11,
            kanji: 7
        },
        H: {
            numeric: 17,
            alphanumeric: 10,
            byte: 7,
            kanji: 4
        }
    },
    {
        version: 2,
        L: {
            numeric: 77,
            alphanumeric: 47,
            byte: 32,
            kanji: 20
        },
        M: {
            numeric: 63,
            alphanumeric: 38,
            byte: 26,
            kanji: 16
        },
        Q: {
            numeric: 48,
            alphanumeric: 29,
            byte: 20,
            kanji: 12
        },
        H: {
            numeric: 34,
            alphanumeric: 20,
            byte: 14,
            kanji: 8
        }
    }
];

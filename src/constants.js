/**
 * @type { Map<Mode, number> }
 */
export const MODE_INDICATORS = new Map([
    ["numeric", 0b0001],
    ["alpha", 0b0010],
    ["byte", 0b0100],
    ["kanji", 0b1000]
]);

export const VERSION_BYTE = {
    versions: [
        {
            version: 1,
            L: 17,
            M: 14,
            Q: 11,
            H: 7
        },
        {
            version: 2,
            L: 32,
            M: 26,
            Q: 20,
            H: 14
        },
        {
            version: 3,
            L: 53,
            M: 42,
            Q: 32,
            H: 24
        },
        {
            version: 4,
            L: 78,
            M: 62,
            Q: 46,
            H: 34
        },
        {
            version: 5,
            L: 106,
            M: 84,
            Q: 60,
            H: 44
        },
        {
            version: 6,
            L: 134,
            M: 106,
            Q: 74,
            H: 58
        },
        {
            version: 7,
            L: 154,
            M: 122,
            Q: 86,
            H: 64
        },
        {
            version: 8,
            L: 192,
            M: 152,
            Q: 108,
            H: 84
        },
        {
            version: 9,
            L: 230,
            M: 180,
            Q: 130,
            H: 98
        },
        {
            version: 10,
            L: 271,
            M: 213,
            Q: 151,
            H: 119
        }
    ]
};

export const ERROR_CORRECTION = [
    {
        version: 1,
        L: { blocks: 1, ec_codewords_per_block: 7 },
        M: { blocks: 1, ec_codewords_per_block: 10 },
        Q: { blocks: 1, ec_codewords_per_block: 13 },
        H: { blocks: 1, ec_codewords_per_block: 17 }
    },
    {
        version: 2,
        L: { blocks: 1, ec_codewords_per_block: 10 },
        M: { blocks: 1, ec_codewords_per_block: 16 },
        Q: { blocks: 1, ec_codewords_per_block: 22 },
        H: { blocks: 1, ec_codewords_per_block: 28 }
    },
    {
        version: 3,
        L: { blocks: 1, ec_codewords_per_block: 15 },
        M: { blocks: 1, ec_codewords_per_block: 26 },
        Q: { blocks: 2, ec_codewords_per_block: 18 },
        H: { blocks: 2, ec_codewords_per_block: 22 }
    },
    {
        version: 4,
        L: { blocks: 1, ec_codewords_per_block: 20 },
        M: { blocks: 2, ec_codewords_per_block: 18 },
        Q: { blocks: 2, ec_codewords_per_block: 26 },
        H: { blocks: 4, ec_codewords_per_block: 16 }
    },
    {
        version: 5,
        L: { blocks: 1, ec_codewords_per_block: 26 },
        M: { blocks: 2, ec_codewords_per_block: 24 },
        Q: { blocks: 2, ec_codewords_per_block: 18 },
        H: { blocks: 2, ec_codewords_per_block: 22 }
    },
    {
        version: 6,
        L: { blocks: 2, ec_codewords_per_block: 18 },
        M: { blocks: 4, ec_codewords_per_block: 16 },
        Q: { blocks: 4, ec_codewords_per_block: 24 },
        H: { blocks: 4, ec_codewords_per_block: 28 }
    },
    {
        version: 7,
        L: { blocks: 2, ec_codewords_per_block: 20 },
        M: { blocks: 4, ec_codewords_per_block: 18 },
        Q: { blocks: 6, ec_codewords_per_block: 18 },
        H: { blocks: 5, ec_codewords_per_block: 26 }
    },
    {
        version: 8,
        L: { blocks: 2, ec_codewords_per_block: 24 },
        M: { blocks: 4, ec_codewords_per_block: 22 },
        Q: { blocks: 6, ec_codewords_per_block: 22 },
        H: { blocks: 6, ec_codewords_per_block: 26 }
    },
    {
        version: 9,
        L: { blocks: 2, ec_codewords_per_block: 30 },
        M: { blocks: 4, ec_codewords_per_block: 22 },
        Q: { blocks: 8, ec_codewords_per_block: 20 },
        H: { blocks: 8, ec_codewords_per_block: 24 }
    },
    {
        version: 10,
        L: { blocks: 2, ec_codewords_per_block: 18 },
        M: { blocks: 4, ec_codewords_per_block: 26 },
        Q: { blocks: 8, ec_codewords_per_block: 24 },
        H: { blocks: 8, ec_codewords_per_block: 28 }
    }
];

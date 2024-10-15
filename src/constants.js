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
        totalCodewords: 26,
        errorCorrectionLevels: {
            L: { dataCodewords: 19, errorCorrectionCodewords: 7 },
            M: { dataCodewords: 16, errorCorrectionCodewords: 10 },
            Q: { dataCodewords: 13, errorCorrectionCodewords: 13 },
            H: { dataCodewords: 9, errorCorrectionCodewords: 17 }
        }
    },
    {
        version: 2,
        totalCodewords: 44,
        errorCorrectionLevels: {
            L: { dataCodewords: 34, errorCorrectionCodewords: 10 },
            M: { dataCodewords: 28, errorCorrectionCodewords: 16 },
            Q: { dataCodewords: 22, errorCorrectionCodewords: 22 },
            H: { dataCodewords: 16, errorCorrectionCodewords: 28 }
        }
    },
    {
        version: 3,
        totalCodewords: 70,
        errorCorrectionLevels: {
            L: { dataCodewords: 55, errorCorrectionCodewords: 15 },
            M: { dataCodewords: 44, errorCorrectionCodewords: 26 },
            Q: { dataCodewords: 34, errorCorrectionCodewords: 36 },
            H: { dataCodewords: 26, errorCorrectionCodewords: 44 }
        }
    },
    {
        version: 4,
        totalCodewords: 100,
        errorCorrectionLevels: {
            L: { dataCodewords: 80, errorCorrectionCodewords: 20 },
            M: { dataCodewords: 64, errorCorrectionCodewords: 36 },
            Q: { dataCodewords: 48, errorCorrectionCodewords: 52 },
            H: { dataCodewords: 36, errorCorrectionCodewords: 64 }
        }
    },
    {
        version: 5,
        totalCodewords: 134,
        errorCorrectionLevels: {
            L: { dataCodewords: 108, errorCorrectionCodewords: 26 },
            M: { dataCodewords: 86, errorCorrectionCodewords: 48 },
            Q: { dataCodewords: 62, errorCorrectionCodewords: 72 },
            H: { dataCodewords: 46, errorCorrectionCodewords: 88 }
        }
    },
    {
        version: 6,
        totalCodewords: 172,
        errorCorrectionLevels: {
            L: { dataCodewords: 136, errorCorrectionCodewords: 36 },
            M: { dataCodewords: 108, errorCorrectionCodewords: 62 },
            Q: { dataCodewords: 76, errorCorrectionCodewords: 96 },
            H: { dataCodewords: 60, errorCorrectionCodewords: 112 }
        }
    },
    {
        version: 7,
        totalCodewords: 196,
        errorCorrectionLevels: {
            L: { dataCodewords: 156, errorCorrectionCodewords: 40 },
            M: { dataCodewords: 124, errorCorrectionCodewords: 72 },
            Q: { dataCodewords: 88, errorCorrectionCodewords: 108 },
            H: { dataCodewords: 66, errorCorrectionCodewords: 130 }
        }
    },
    {
        version: 8,
        totalCodewords: 242,
        errorCorrectionLevels: {
            L: { dataCodewords: 194, errorCorrectionCodewords: 48 },
            M: { dataCodewords: 154, errorCorrectionCodewords: 88 },
            Q: { dataCodewords: 110, errorCorrectionCodewords: 132 },
            H: { dataCodewords: 86, errorCorrectionCodewords: 156 }
        }
    },
    {
        version: 9,
        totalCodewords: 292,
        errorCorrectionLevels: {
            L: { dataCodewords: 232, errorCorrectionCodewords: 60 },
            M: { dataCodewords: 182, errorCorrectionCodewords: 110 },
            Q: { dataCodewords: 132, errorCorrectionCodewords: 160 },
            H: { dataCodewords: 100, errorCorrectionCodewords: 192 }
        }
    },
    {
        version: 10,
        totalCodewords: 346,
        errorCorrectionLevels: {
            L: { dataCodewords: 274, errorCorrectionCodewords: 72 },
            M: { dataCodewords: 216, errorCorrectionCodewords: 130 },
            Q: { dataCodewords: 154, errorCorrectionCodewords: 192 },
            H: { dataCodewords: 122, errorCorrectionCodewords: 224 }
        }
    }
];

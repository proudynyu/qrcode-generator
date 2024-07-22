/**
 * @type { Map<CorrectLevelError, CorrectionLevelType> }
 */
export const CORRECTION_LEVEL = new Map([
    [
        "L",
        {
            numeric_mode: 187,
            alpha_numeric_mode: 114,
            byte_mode: 78,
            kanji_mode: 48
        }
    ],
    [
        "M",
        {
            numeric_mode: 149,
            alpha_numeric_mode: 90,
            byte_mode: 62,
            kanji_mode: 38
        }
    ],
    [
        "Q",
        {
            numeric_mode: 111,
            alpha_numeric_mode: 67,
            byte_mode: 46,
            kanji_mode: 28
        }
    ],
    [
        "H",
        {
            numeric_mode: 82,
            alpha_numeric_mode: 50,
            byte_mode: 34,
            kanji_mode: 21
        }
    ]
]);

/**
 * @type { Map<ModeIndicator, string> }
 */
export const MODE_INDICATORS = new Map([
    ["numeric", "0001"],
    ["alpha", "0010"],
    ["byte", "0100"],
    ["kanji", "1000"],
])


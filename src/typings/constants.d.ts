type CorrectLevelError = "L" | "M" | "Q" | "H"

type CorrectionLevelType = {
    numeric_mode: number
    alpha_numeric_mode: number
    byte_mode: number
    kanji_mode: number
}

type ModeIndicator = "numeric" | "alpha" | "byte" | "kanji"
